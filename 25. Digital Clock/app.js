const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let s,m,h;

setInterval(() => {
    let now = new Date();
    s = now.getSeconds();
    m = now.getMinutes();
    h = now.getHours();
    // console.log(s);
    // console.log(m);
    console.log(h);
    // hour degree per sec
    let hdps = 360/(12*60*60);

    // hour in second
    let hs = h*3600 + m*60 + s;
    
    
    
    hour.style.transform = `rotateZ(${hs*hdps}deg)`;
    minute.style.transform = `rotateZ(${m*6}deg)`;
    second.style.transform = `rotateZ(${s*6}deg)`;
}, s);
