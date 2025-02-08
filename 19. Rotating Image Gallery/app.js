const containerEl = document.querySelector('.container');
const prevEl = document.getElementById('prev'); 
const nextEl = document.getElementById('next'); 

let x=0;
let timer;
prevEl.addEventListener("click", () =>{
    x= x + 45;
    clearTimeout(timer);
    updateGallery(x);
});

nextEl.addEventListener("click", () =>{
    x = x - 45;
    clearTimeout(timer);
    updateGallery(x);
});

updateGallery(x);

function updateGallery(x) {
    containerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    
    timer = setTimeout(() =>{
        x = x-45;
        updateGallery(x);
    },3000);
    
};
