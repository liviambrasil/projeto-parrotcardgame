let cardsnumber = prompt("Com quantas cartas você gostaria de jogar?");
let cardsarea = document.querySelector(".cardsarea");
let secondimgcard = null;

while (cardsnumber%2 | cardsnumber<4 | cardsnumber>14) {
    cardsnumber = prompt("Com quantas cartas você gostaria de jogar?")
}

let img = [];
    img [0] = "img/bobrossparrot.gif"
    img [1] = "img/explodyparrot.gif"
    img [2] = "img/fiestaparrot.gif"
    img [3] = "img/metalparrot.gif"
    img [4] = "img/revertitparrot.gif"
    img [5] = "img/tripletsparrot.gif"
    img [6] = "img/unicornparrot.gif"

img.sort(comparador);

let arrcards = [];

for (let i = 0; i < cardsnumber/2 ; i++) {       
    arrcards.push(img[i]); 
    arrcards.push(img[i]);           
}

arrcards.sort(comparador)


for (i=0; i<cardsnumber; i++){
    cardsarea.innerHTML += 
    `<div class="card"> 
        <img onclick="changeimg(this)" id="${arrcards[i]}" src="img/front.png" alt="papagaio da frente da carta"> </div>`
}

let card = document.querySelector(".card");

function changeimg(imgcard) {
    imgcard.classList.toggle("imgchange");
    imgcard.setAttribute('src', imgcard.id);
}

if (secondimgcard == null) {
    secondimgcard = imgcard;
}

let imgcard = document.querySelector(".card img")
function comparador() { 
	return Math.random() - 0.5;
}
