const obj = {
  name: 'slr',
  age: 12,
  sex: '男'
}
const handler =  {
  get: function(target, key, receiver) {
    console.log('get', receiver)
    return target[key]
  },
  set: function(target, key, value, receiver) {
    console.log('set', receiver)
    target[key] = value
    return value
  }
}

let newObj = {}
let proxyObj = new Proxy(newObj, handler)
proxyObj.age
proxyObj.name = 'sss'