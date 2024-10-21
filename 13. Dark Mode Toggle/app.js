// const input = document.querySelector('.input');
// const body = document.body;

// // console.log(input.checked);  // give false if not checked otherwise true
// // input.checked = false;
// // input.checked = true;

// input.checked = JSON.parse(localStorage.getItem("mode"));

// // updateBody();

// function updateBody(){
//     if(input.checked){
//         body.style.background = "black";
//     } else {
//         body.style.background = "white";
//     }
// };

// input.addEventListener("click", () =>{
//     updateBody();
//     updateLocalStorage();
// });

// function updateLocalStorage() {
//     localStorage.setItem("mode",JSON.stringify(input.checked));
// };



// ////////// My code

const input = document.querySelector('#Toggle-btn');
const body = document.body;

console.log(input.checked);
input.checked = JSON.parse(localStorage.getItem("mode"));


// arrow function to update body background on condition of input.checked

const updateBody = () => input.checked?body.style.background = "black" : body.style.background = "white";

// function updateBody() {
//     if(input.checked === true){
//         body.style.background = "black";
//     }
//     else{
//         body.style.background = "white";
//     }
// }

updateBody();

input.addEventListener("click", () =>{
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("mode",JSON.stringify(input.checked));
};