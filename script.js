const colorDisplay = document.getElementById('#color-display');
const container = document.querySelector('.container');
const colorButtons = document.querySelectorAll('.color-btn');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

let timer; 
//*change color function
function changeColor(color){
    container.style.backgroundColor = color;
    colorDisplay.textContent = "Current Color: " + color;
}

//*color click
colorButtons[0].addEventListener("click", function() {
    changeColor('Red')
})
colorButtons[1].addEventListener("click", function() {
    changeColor('Blue')
})
colorButtons[2].addEventListener("click", function() {
    changeColor('Green')
})

//*mouseover and mouseout
colorButtons[0].addEventListener("mouseover", function() {
    colorButtons[0].style.opacity = '0.5';
})
colorButtons[0].addEventListener("mouseout", function() {
    colorButtons[0].style.opacity = '1';
})

colorButtons[1].addEventListener("mouseover", function() {
    colorButtons[1].style.opacity = '0.5';
})
colorButtons[1].addEventListener("mouseout", function() {
    colorButtons[1].style.opacity = '1';
})

colorButtons[2].addEventListener("mouseover", function() {
    colorButtons[2].style.opacity = '0.5';
})
colorButtons[2].addEventListener("mouseout", function() {
    colorButtons[2].style.opacity = '1';
})

