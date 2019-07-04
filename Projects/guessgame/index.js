console.clear();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive 
}

function printAppScreen(htmlString) {
    let appElem = document.querySelector("#app");

    appElem.innerHTML = htmlString;
}

function printGuessScreen(title, message) {
    printAppScreen(`
        <h1 class="display-1">${title}</h1>
        <p class="lead">${message}</p>
        <form class="mt-4 w-50 mx-auto" id="guess-form">
        <div class="form-row">
            <div class="col-xs-12 col-sm">
                <input type="number" class="form-control" name="guess" id="guess" placeholder="Your guess goes here..." required min="1" max="10">
            </div>
            <div class="col-xs-12 col-sm-4">
            <button type="submit" class="btn btn-primary w-100">Guess</button>
            </div>
        </div>
        </form>
    `)

    let guessForm = document.querySelector("#guess-form");

    guessForm.addEventListener("submit", makeGuess);
    
}

function printResultScreen(title, message) {
    printAppScreen(`
        <h1 class="display">${title}</h1>
        <p class="lead">${message}</p>
        <button id="again">Play Again</button>
    `)

    let againButton = document.querySelector("#again");

    againButton.addEventListener("click", startGame);
}

const makeGuess = function() {
    let userGuess = parseInt(document.querySelector("#guess").value.trim());

    if(userGuess === numberToGuess) {
        printResultScreen("Success", `The number to be guessed is ${numberToGuess}`);
    } else if(count >= 3) {
        printResultScreen(`Sorry.....`, `the number was ${numberToGuess}`);
    } else {
        printGuessScreen(`Wrong!`, `Try again! You have ${3 - count} attempts.....`)
    }

    count++;
    console.log(count)
}

const startGame = function() {
    numberToGuess = getRandomIntInclusive(1, 10);
    count = 1;

    printGuessScreen(`Guess Me`, `I\'m thinking.....`)    
}

startGame();