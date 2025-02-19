// loading bar
const counter = document.querySelector('.counter');

// loading bar

const frontBar = document.querySelector('.loading-bar-front');


// console.log(backBar);
// console.log(frontBar);

let x=0;

updateLoader();

function updateLoader() {
    counter.innerText = `${x}%`;
    frontBar.style.width = x + "%";
    x += 1;

    if (x<101){
        setTimeout(updateLoader, 20);
    }
}