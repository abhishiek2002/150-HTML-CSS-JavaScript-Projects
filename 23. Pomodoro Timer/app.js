const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const start = document.querySelector('.start');

let s = 0;
let m =1;
let timer;

start.addEventListener('click', () =>{

   timer = setInterval(() => {
        if(m<0){
            s+=1;
        }
        else{
            s-=1;
        updateTime();
        }
        
    }, 1000);

});

stop.addEventListener('click', () =>{
    clearInterval(timer);
});

reset.addEventListener("click", () =>{
    clearInterval(timer);
    s=0;
    m=25;
    updateTime();
});


function updateTime() {
    if(s<0){
        m=m-1;
    };
    s = s<0?59:s;


    second.innerText = s;
    minute.innerText = m;

    if(s===0){
        second.innerText = '00';
    }
};