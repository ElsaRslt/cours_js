"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cards = ['https://picsum.photos/id/237/100/100', 'https://picsum.photos/id/238/100/100', 'https://picsum.photos/id/239/100/100', 'https://picsum.photos/id/240/100/100', 'https://picsum.photos/id/241/100/100', 'https://picsum.photos/id/242/100/100', 'https://picsum.photos/id/243/100/100', 'https://picsum.photos/id/244/100/100'];
var gameBoard = document.getElementById("game-board");
var selectedCards = [];

function createCard(CardUrl) {
  var card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = CardUrl;
  var cardContent = document.createElement("img");
  cardContent.classList.add("card-content");
  cardContent.src = CardUrl;
  card.appendChild(cardContent);
  card.addEventListener('click', onCardClick);
  return card;
}

function duplicateArray(arraySimple) {
  var arrayDouble = [];
  arrayDouble.push.apply(arrayDouble, _toConsumableArray(arraySimple));
  arrayDouble.push.apply(arrayDouble, _toConsumableArray(arraySimple));
  return arrayDouble;
}

function shuffreArray(arrayToshuffle) {
  var arraySuffled = arrayToshuffle.sort(function () {
    return 0.5 - Math.random();
  });
  return arraySuffled;
}

var allCards = duplicateArray(cards);
allCards = shuffreArray(allCards);
allCards.forEach(function (card) {
  var cardHtml = createCard(card);
  gameBoard.appendChild(cardHtml);
});

function onCardClick(e) {
  var card = e.target.parentElement;
  card.classList.add('flip');
  selectedCards.push(card);

  if (selectedCards.length == 2) {
    setTimeout(function () {
      if (selectedCards[0].dataset.value == selectedCards[1].dataset.value) {
        //on a trouvé une paire
        selectedCards[0].classList.add("matched");
        selectedCards[1].classList.add("matched");
        selectedCards[0].removeEventListener('click', onCardClick);
        selectedCards[1].removeEventListener('click', onCardClick);
      } else {
        //on s'est trompé
        selectedCards[0].classList.remove("flip");
        selectedCards[1].classList.remove("flip");
      }

      selectedCards = [];
    }, 1000);
  }
}