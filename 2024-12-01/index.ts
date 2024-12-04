const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.xiaoman = name
    target.prototype.fn = () => {
      console.log('我是天下第一帅');
    }
  }
  return fn
}
const Base1: ClassDecorator = (target) => {
  console.log(target)
  target.prototype.name = 'slr'
  target.prototype.fn = () => {
    console.log('憨憨')
  }
}

@Base('slr')
class Http {
 //....
}
const http = new Http() as any
console.log(http.xiaoman)