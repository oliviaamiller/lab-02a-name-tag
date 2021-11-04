const changeInputEl = document.getElementById('change-input');

const changeButtonEl = document.getElementById('change-button');

const changeNameEl = document.getElementById('change-name');


changeButtonEl.addEventListener('click', () => {

    changeNameEl.textContent = changeInputEl.value;

});
