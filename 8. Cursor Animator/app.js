const body = document.body;

body.addEventListener("mousemove", (event) =>{

    const xPos= event.offsetX + 20;
    const yPos= event.offsetY + 20;


    const spanEl = document.createElement("span");

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    body.appendChild(spanEl);

    setTimeout(() =>{
        spanEl.remove();
    },300)

})