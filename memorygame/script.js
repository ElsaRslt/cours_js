
const cards = [
    'https://picsum.photos/id/237/100/100', 
    'https://picsum.photos/id/238/100/100',
    'https://picsum.photos/id/239/100/100',
    'https://picsum.photos/id/240/100/100',
    'https://picsum.photos/id/241/100/100',
    'https://picsum.photos/id/242/100/100',
    'https://picsum.photos/id/243/100/100',
    'https://picsum.photos/id/244/100/100'
];

const gameBoard= document.getElementById("game-board");

let selectedCards=[];


function createCard(CardUrl) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = CardUrl;

    let cardContent = document.createElement("img");
    cardContent.classList.add("card-content");
    cardContent.src = CardUrl;

    card.appendChild(cardContent);
    card.addEventListener('click', onCardClick);
    return card;
}


function duplicateArray(arraySimple) {
    let arrayDouble = [];
    arrayDouble.push(...arraySimple);
    arrayDouble.push(...arraySimple);
    return arrayDouble;
}

function shuffreArray ( arrayToshuffle){
    const arraySuffled =arrayToshuffle.sort(()=>0.5 - Math.random())
    return arraySuffled
}

let allCards = duplicateArray(cards);
allCards=shuffreArray(allCards);

allCards.forEach(card => {
    const cardHtml = createCard(card);
    gameBoard.appendChild(cardHtml);
})

function onCardClick(e){
    let card = e.target.parentElement;
    card.classList.add('flip');
    
    selectedCards.push(card);
    if(selectedCards.length == 2){
        setTimeout(() => {
            if(selectedCards[0].dataset.value == selectedCards[1].dataset.value){
                //on a trouvé une paire
                selectedCards[0].classList.add("matched");
                selectedCards[1].classList.add("matched");
                selectedCards[0].removeEventListener('click', onCardClick);
                selectedCards[1].removeEventListener('click', onCardClick);
            }
            else{
                //on s'est trompé
                
                    selectedCards[0].classList.remove("flip");
                    selectedCards[1].classList.remove("flip");
            }
            selectedCards = [];
        }, 1000)
    }
}
