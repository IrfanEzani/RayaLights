const circle = document.getElementsByClassName('circle')
const red = document.getElementsByClassName('red')
const blue = document.getElementsByClassName('blue')
const yellow = document.getElementsByClassName('yellow')
const green = document.getElementsByClassName('green')
const button = document.getElementById('btn')

button.addEventListener('click', function() {
 circle.classList.remove('red');
 circle.classList.remove('blue');
 circle.classList.remove('yellow');
 circle.classList.remove('green');
})
