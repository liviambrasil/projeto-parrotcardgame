let cardsNumber = prompt("Com quantas cartas você gostaria de jogar?");
let cardsArea = document.querySelector(".cardsArea");
let cardSelected = [];
let cardPosition = [];
let counter = 0;

while (cardsNumber%2 !== 0 | cardsNumber<4 | cardsNumber>14) {
    cardsNumber = prompt("Com quantas cartas você gostaria de jogar?")
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

let arrCards = [];

for (let i = 0; i < cardsNumber/2 ; i++) {       
    arrCards.push(img[i]); 
    arrCards.push(img[i]);           
}

arrCards.sort(comparador)


for (i=0; i<cardsNumber; i++){
    cardsArea.innerHTML += 
    `<div class="card"> 
        <img onclick="changeImg(this)" id="card${i}" alt="${arrCards[i]}" src="img/front.png" alt="papagaio da frente da carta"> </div>`
}

let card = document.querySelector(".card");


function changeImg(imgCard) {
    if (cardSelected.length < 2) {
        imgCard.setAttribute('src', imgCard.alt);
        imgCard.setAttribute('onclick', "");
        cardSelected.push(imgCard.alt);
        cardPosition.push(imgCard.id);
        console.log(cardSelected);
        compare ();
        counter += 1;
}
}



function compare () {

if (cardPosition.length == 2) {
    if (cardSelected[0] != cardSelected[1]) {
        setTimeout(untap , 1000);
    }
    else {
        cardSelected = [];
        cardPosition = [];
        cardsNumber -= 2;
        if (cardsNumber==0) {
            alert(`Você ganhou em ${counter} jogadas!`);
        }
    }
}

function untap () {
    for (i = 0; i<2 ; i++) {
        let firstCard = document.getElementById(cardPosition[i]);
        firstCard.setAttribute('src', "img/front.png");
        firstCard.setAttribute('onclick', "changeImg(this)");
    }
    console.log(cardPosition);
    cardSelected = [];
    cardPosition = [];
}
}

function comparador() {
	return Math.random() - 0.5;
}
