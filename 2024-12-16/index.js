// 定一个临时变了
let activeEffect = null
const effect = (fn) => {
  // 将回调函数 赋值到临时变量上面
  activeEffect = fn
  fn()
  // 执行完回调函数后 将临时变量置空
  activeEffect = null
}
const reactive = (obj) => {
  // 定一个对象 用来存储 订阅的回调函数
  let effectMap = {}
  return new Proxy(obj, {
    get(target, key) {
      // 如果临时变量有值 则将回调函数 添加到订阅的回调函数列表中
      if(activeEffect) {
        // 如果订阅的回调函数列表中没有该属性 则创建一个空数组
        if(!effectMap[key]) {
          effectMap[key] = []
        }
        // 将回调函数 添加到订阅的回调函数列表中
        effectMap[key].push(activeEffect)
      }
      console.log('订阅', target, key)
      return target[key]
    },
    set(target, key, value) {
      console.log('发布', target, key, value)
      target[key] = value
      // 如果订阅的回调函数列表中 有该属性 则执行回调函数
      if(effectMap[key]) {
        effectMap[key].forEach(effect => {
          // 执行回调函数
          effect()
        })
      }
      return true
    }
  })
}
export { effect, reactive }