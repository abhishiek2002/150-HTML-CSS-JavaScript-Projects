const closeIconEl = document.querySelector('.close-icon');
const videoContainer = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');

closeIconEl.addEventListener("click", () =>{
    videoContainer.classList.add('active');
    videoEl.pause();
    videoEl.currentTime = 0;
});

const watch = document.querySelector('.btn');

watch.addEventListener("click", () =>{
    videoContainer.classList.remove('active')
});