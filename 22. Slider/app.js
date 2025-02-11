const span = document.querySelector('.img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let x =1;

prev.addEventListener("click", () =>{
    x -= 1;
    x = x<1?4:x;
    span.id = `img${x}`;
    
});

next.addEventListener("click", () =>{
    x += 1;
    x = x>4?1:x;
    span.id = `img${x}`;
});