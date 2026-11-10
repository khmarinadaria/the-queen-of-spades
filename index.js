let playerOneButton = document.getElementById("player1-button")
let playerTwoButton = document.getElementById("player2-button")
let card = document.getElementById("card")
let gameMessage = document.getElementById("game-message")

let gameOver = false
let currentPlayer = Math.floor(Math.random()*2+1)
if (currentPlayer === 1) {
    playerTwoButton.disabled = true
    card.textContent = "The Player 1 moves"
} else {
    playerOneButton.disabled = true
    card.textContent = 'The Player 2 moves'
}

let deck = [
    {
        name: "Six of Spades",
        isLosingGame: false,
        image: "src/spades/6.png",
    },
    {
        name: "Seven of Spades",
        isLosingGame: false,
        image: "src/spades/7.png"
    },
    {
        name: "Eight of Spades",
        isLosingGame: false,
        image: "src/spades/8.png"
    },
    {
        name: "Nine of Spades",
        isLosingGame: false,
        image: "src/spades/9.png"
    },
    {
        name: "Ten of Spades",
        isLosingGame: false,
        image: "src/spades/10.png"
    },
    {
        name: "Jack of Spades",
        isLosingGame: false,
        image: "src/spades/jack.png"
    },
    {
        name: "Queen of Spades",
        isLosingGame: true,
        image: "src/spades/queen.png"
    },
    {
        name: "King of Spades",
        isLosingGame: false,
        image: "src/spades/king.png"
    },
    {
        name: "Ace of Spades",
        isLosingGame: false,
        image: "src/spades/ace.png"
    },
    {
        name: "Six of Hearts",
        isLosingGame: false,
        image: "src/hearts/6.png"
    },
    {
        name: "Seven of Hearts",
        isLosingGame: false,
        image: "src/hearts/7.png"
    },
    {
        name: "Eight of Hearts",
        isLosingGame: false,
        image: "src/hearts/8.png"
    },
    {
        name: "Nine of Hearts",
        isLosingGame: false,
        image: "src/hearts/9.png"
    },
    {
        name: "Ten of Hearts",
        isLosingGame: false,
        image: "src/hearts/10.png"
    },
    {
        name: "Jack of Hearts",
        isLosingGame: false,
        image: "src/hearts/jack.png"
    },
    {
        name: "Queen of Hearts",
        isLosingGame: false,
        image: "src/hearts/queen.png"
    },
    {
        name: "King of Hearts",
        isLosingGame: false,
        image: "src/hearts/king.png"
    },
    {
        name: "Ace of Hearts",
        isLosingGame: false,
        image: "src/hearts/ace.png"
    },
    {
        name: "Six of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/6.png"
    },
    {
        name: "Seven of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/7.png"
    },
    {
        name: "Eight of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/8.png"
    },
    {
        name: "Nine of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/9.png"
    },
    {
        name: "Ten of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/10.png"
    },
    {
        name: "Jack of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/jack.png"
    },
    {
        name: "Queen of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/queen.png"
    },
    {
        name: "King of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/king.png"
    },
    {
        name: "Ace of Diamonds",
        isLosingGame: false,
        image: "src/diamonds/ace.png"
    },
    {
        name: "Six of Clubs",
        isLosingGame: false,
        image: "src/clubs/6.png"
    },
    {
        name: "Seven of Clubs",
        isLosingGame: false,
        image: "src/clubs/7.png"
    },
    {
        name: "Eight of Clubs",
        isLosingGame: false,
        image: "src/clubs/8.png"
    },
    {
        name: "Nine of Clubs",
        isLosingGame: false,
        image: "src/clubs/9.png"
    },
    {
        name: "Ten of Clubs",
        isLosingGame: false,
        image: "src/clubs/10.png"
    },
    {
        name: "Jack of Clubs",
        isLosingGame: false,
        image: "src/clubs/jack.png"
    },
    {
        name: "Queen of Clubs",
        isLosingGame: false,
        image: "src/clubs/queen.png"
    },
    {
        name: "King of Clubs",
        isLosingGame: false,
        image: "src/clubs/king.png"
    },
    {
        name: "Ace of Clubs",
        isLosingGame: false,
        image: "src/clubs/ace.png"
    },
]

function drawCard() {
    card.textContent = " "
    let index = " "
    if (currentPlayer === 1) {
        currentPlayer = 2
    } else {
        currentPlayer = 1
    }
    index = Math.floor(Math.random()*deck.length)
    card.textContent = deck[index].name
    const img = document.createElement("img")
    img.src = deck[index].image
    card.append(img)
    if (deck[index].isLosingGame === true) {
        gameOver = true
        return gameOver 
    } else if (deck[index].isLosingGame === false) {
        gameOver = false
        deck.splice(index,1)
    }
}

playerOneButton.addEventListener("click", function(){
    if (currentPlayer === 2) {
        return
    } else {
        drawCard()
        if (gameOver === true) {
            gameMessage.textContent = "Player 2 won!!"
        } else {
            playerOneButton.disabled = true 
            playerTwoButton.disabled = false
        }
    }
})

playerTwoButton.addEventListener("click", function(){
    if (currentPlayer === 1) {
        return
    } else {
        drawCard()
        if (gameOver === true) {
            gameMessage.textContent = "Player 1 won!!"
        } else {
            playerTwoButton.disabled = true 
            playerOneButton.disabled = false
        }
    }
})