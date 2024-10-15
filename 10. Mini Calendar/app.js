const monthName = document.querySelector('#month');

const dayName = document.getElementById('day');
const dateNum = document.getElementById('date');
const yearNum = document.getElementById('year');

const date = new Date();

monthName.innerText = date.toLocaleString("en", {
    month:"long"
});

dayName.innerText = date.toLocaleString("en", {
    weekday:"long"
});

dateNum.innerText = date.getDate();

yearNum.innerText = date.getFullYear();