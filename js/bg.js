const body = document.querySelector("body");

IMAGE_NUMBER = 6;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);

}

function getRandom(){
    const number = Math.floor(Math.random()*IMAGE_NUMBER);
    return number;
}

function init(){
 const randomNumber = getRandom();
 paintImage(randomNumber);

}
init();