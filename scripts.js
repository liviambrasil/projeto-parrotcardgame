let cardsnumber = prompt("Com quantas cartas você gostaria de jogar?");

while (cardsnumber%2 | cardsnumber<4 | cardsnumber>14) {
    cardsnumber = prompt("Com quantas cartas você gostaria de jogar?")
}

let card = document.querySelector(".card");
let cards = [];
    cards [0] = "img/bobrossparrot.gif";
    cards [1] = "img/explodyparrot.gif";
    cards [2] = "img/fiestaparrot.gif";
    cards [3] = "img/metalparrot.gif";
    cards [4] = "img/revertitparrot.gif";
    cards [5] = "img/tripletsparrot.gif";
    cards [6] = "img/unicornparrot.gif";

