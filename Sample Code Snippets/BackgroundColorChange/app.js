var btn = document.querySelector('button');
var body = document.querySelector('body');
var h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    var color = getRandomColor();
    body.style.backgroundColor = color;
    h1.innerHTML = color;
})

var getRandomColor = () => {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}