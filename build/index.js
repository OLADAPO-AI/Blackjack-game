const player = {
    name : "David",
    chips :19 ,
}
let card = []
let sumCard = 0 
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("playmesg")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $ " + player.chips
function getRandomNumber() {
    let random = Math.floor(Math.random()*12) + 1
    if (random > 10) {
        return 10
    } else if (random === 1){
        return 11
    } else {
        return random
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    card = [firstCard,secondCard]
    sumCard = firstCard + secondCard
    renderGame()
}

function renderGame() {
    
    if (sumCard <= 20) {
        message = "Do you want to draw a new card"
    } else if(sumCard === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    sumEl.textContent = "Sum: " + sumCard
    messageEl.textContent = message
    cardEl.textContent = "Cards: " 
    for(let i=0; i<card.length; i++){
        cardEl.textContent += card[i] + " "
    }
}

function newCard() {
    
    if (isAlive == true && hasBlackJack === false ) {
        let thirdCard = getRandomNumber()
        sumCard += thirdCard
        card.push(thirdCard)
        renderGame()
    }

}

