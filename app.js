const changeInputEl = document.getElementById('change-input');
const changeButtonEl = document.getElementById('change-button');
const changeNameEl = document.getElementById('change-name');
const newColorButtonEl = document.getElementById('color-button');
const newColorBoxEl = document.getElementById('new-color-box');

const colors = ['pink', 'red', 'orange', 'yellow', 'blue', 'green'];


changeButtonEl.addEventListener('click', () => {
    changeNameEl.textContent = changeInputEl.value;
});


let colorNumber = 0;

newColorButtonEl.addEventListener('click', () => {
    newColorBoxEl.style.backgroundColor = colors[colorNumber % colors.length];   
    colorNumber++;
});
 
