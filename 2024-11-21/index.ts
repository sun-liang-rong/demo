import { sys } from "./node_modules/typescript/lib/typescript"

let map: Map<string, number> = new Map()
map.set('slr', 20)
const earh = (value: any) => {
  let It = value[Symbol.iterator]()
  let next: any = {done: false}
  while(!next.done) {
    next = It.next()
    console.log(next.value)
  }   
}
// earh(map)
let obj = {
  max: 5,
  current: 0,
  [Symbol.iterator] () {
    return {
      max : this.max,
      current: this.current,
      next() {
        if(this.max == this.current) {
          return {
            value: undefined,
            done: true
          }
        } else {
          return {
            value: this.current++,
            done: false
          }
        }
      }
    }
  }
}
for (const item of obj) {
  console.log(item)
}