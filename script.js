const createImg = document.createElement("img");
const container = document.querySelector(".container");
const btn  = document.querySelector(".btn");

createImg.src = "images/pic.jpg";
createImg.width="300";
createImg.height="400";

btn.addEventListener("click",()=>{
    container.appendChild(createImg);
})
