var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 5;
var str = 'slryyds'.split('');
var arr = Array(Math.floor(canvas.width / 10)).fill(0);
console.log(arr, str, ctx);
var rain = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    arr.forEach(function (item, index) {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
        arr[index] = item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
};
setInterval(function () {
    rain();
}, 40);
