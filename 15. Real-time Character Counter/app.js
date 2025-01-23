const textArea = document.querySelector('textarea');

const totalChar = document.getElementById('total-count');

const remainingChar = document.getElementById('remaining-count');

const maxLength = textArea.maxLength;

updateCounter();

textArea.addEventListener("keyup", () =>{
    updateCounter();
});

function updateCounter() {
    totalChar.innerText = textArea.value.length;
    remainingChar.innerText = maxLength-textArea.value.length;
};
