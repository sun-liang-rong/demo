const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 5;
let str: string [] = 'slryyds'.split('');
let arr: number [] = Array(Math.floor(canvas.width / 10)).fill(0);
console.log(arr, str, ctx);
const rain = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  arr.forEach((item, index) => {
    ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
    arr[index] = item > canvas.height || item > 10000 *  Math.random() ? 0 : item + 10
  })

}
setInterval(() => {
  rain()
}, 40)