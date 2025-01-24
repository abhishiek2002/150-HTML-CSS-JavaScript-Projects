const hours = document.querySelector('#hour-time');
const minutes = document.querySelector('#minute-time');
const seconds = document.querySelector('#second-time');

const ampm = document.querySelector('#ampm');


updateTimer();


function updateTimer() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10? "0" + h : h;
    m = m < 10? "0" + m : m;
    s = s < 10? "0" + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = "AM";
    if(h > 12){
        h = h-12;
        ampm.innerText = "PM";
    }
    setTimeout(updateTimer , 1000);
}