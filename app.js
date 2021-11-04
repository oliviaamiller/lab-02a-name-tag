const changeInputEl = document.getElementById('change-input');
const changeButtonEl = document.getElementById('change-button');
const changeNameEl = document.getElementById('change-name');
const newColorButtonEl = document.getElementById('color-button');
const newColorBoxEl = document.getElementById('new-color-box');


changeButtonEl.addEventListener('click', () => {
    changeNameEl.textContent = changeInputEl.value;
});


newColorButtonEl.addEventListener('click', () => {
    newColorBoxEl.style.backgroundColor = "magenta";
});
 