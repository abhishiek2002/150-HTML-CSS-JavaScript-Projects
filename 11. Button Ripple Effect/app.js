const btn = document.querySelector('button');
const body = document.body;

btn.addEventListener("mouseover", (event) =>{

    // const x = (event.pageX - btn.offsetX);
    // const y = (event.pageY - btn.offsetY);

    const x = event.offsetX;
    const y = event.offsetY;
    
    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");

    // we can set variable property by choosing any element from DOM ( as we change var(--xPos) and var(--yPos) value by both btn element and with body element )

    // body.style.setProperty("--xPos", x + "px")
    // body.style.setProperty("--yPos", y + "px")
});