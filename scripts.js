let cardsnumber = prompt("Com quantas cartas você gostaria de jogar?");
let cardsarea = document.querySelector(".cardsarea")

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


for (i=0; i<cardsnumber/2; i++){
    cardsarea.innerHTML += 
    `<div class="card"> 
        <img onclick="changeimg(this)" id="${img[i]}" src="img/front.png" alt="papagaio da frente da carta"> </div>`
}

let card = document.querySelector(".card");

function changeimg(imgcard) {
    imgcard.setAttribute('src', imgcard.id);
}

function newcardsarea () {
    cardsarea.innerHTML += `${cardsarea.innerHTML}`;
}

newcardsarea ();

function comparador() { 
	return Math.random() - 0.5;
}