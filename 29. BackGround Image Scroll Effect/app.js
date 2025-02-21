const bgImageEl = document.querySelector('.img-container');
const containerEl = document.querySelector('.container');

const body = document.body;

// console.log(body.offsetHeight);


window.addEventListener('scroll', () =>{
    updateImage();
});

function updateImage() {
    bgImageEl.style.opacity = 1 - window.scrollY/800;
    // console.log(window.scrollY, 1 - window.scrollY/900);

    bgImageEl.style.backgroundSize = 300 - (window.scrollY/containerEl.offsetTop)*100 + "%";
    
}