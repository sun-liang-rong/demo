const axios = require('axios');
// 定义一个 处理并发请求的函数 接受三个参数 请求列表 限制并发数 回调函数
const sendRequest = (requestList, limits, callback) => {
  // 对请求列表进行浅拷贝
  let promises = requestList.slice();
  // 限制并发数量
  let concurrentNum = Math.min(limits, requestList.length);
  // 当前并发数量
  let concurrentCount = 0;
  // 定义首次执行函数
  const onceRender = () => {
    let i = 0;
    while (i < concurrentNum) {
      i++;
      runTask();
    }
  }
  // 出栈执行
  const runTask = () => {
    const task = promises.shift();
    task && runner(task);
  }
  // 执行任务 更新栈内数据
  const runner = async (task) => {
    try {
      concurrentCount++;
      let data  = await task();
      console.log(data, '请求成功');
    } catch (error) {
    } finally {
      concurrentCount--;
      picker();
    }
  }
  // 执行下一个任务
  const picker = () => {
    if (concurrentCount < limits && promises.length > 0) {
      runTask();
    } else if (promises.length == 0 && concurrentCount == 0) {
      callback && callback();
    }
  }
  // 首次执行
  onceRender();
}
let requestList = []
let limits = 5
let callback = () => {
  console.log('请求结束')
}
let loopNum = 10
for (let i = 0; i < loopNum; i++) {
  requestList.push(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('请求成功' + i)
      }, loopNum-- * 1000)
    })
  })
}
sendRequest(requestList, limits, callback)















