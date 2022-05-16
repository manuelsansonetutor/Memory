
//Number: user current score
let score = 0;

//objects array: cards object
const staticDeck = [
    {
        id: 1,
        icon: "🤗",
        discovered: true,
    },
    {
        id: 2,
        icon: "😝",
        discovered: true,
    },
    {
        id: 3,
        icon: "🤑",
        discovered: true,
    },
    {
        id: 4,
        icon: "😇",
        discovered: true,
    },
    {
        id: 5,
        icon: "😈",
        discovered: true,
    },
    {
        id: 1,
        icon: "🤗",
        discovered: true,
    },
    {
        id: 2,
        icon: "😝",
        discovered: true,
    },
    {
        id: 3,
        icon: "🤑",
        discovered: true,
    },
    {
        id: 4,
        icon: "😇",
        discovered: true,
    },
    {
        id: 5,
        icon: "😈",
        discovered: true,
    },
];

//array: we will populate it later
let currentDeck = staticDeck;

//number: last card selected
let firstCardSelected = null;

//render cards into DOM
function renderCards() {
    document.getElementById("memory-table").innerHTML = "";
    for (let i = 0; i < currentDeck.length; i++) {
        document.getElementById("memory-table").innerHTML += createCard(currentDeck[i], i);
    }
}

//function that return the dynamic card html
function createCard(card, index) {
    return (`
    <div class="memory-card" onClick="cardClickEvent(${card.id}, ${index})">
        <span class="symbol">${card.discovered ? card.icon : '❓'}</span>
        <p>click</p>
    </div>
    `);
}

//function that render score and update it
function setScore(newScore) {
    score = newScore;

    let currentScore = `
    <div id="score">
        <p> SCORE: ${score} </p>
    </div>
    `;

    document.getElementById("score").innerHTML = currentScore;
}


renderCards();