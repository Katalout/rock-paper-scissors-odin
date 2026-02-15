console.log("hii, i'm going to code the sheet out of this rockpaperscissors game!!")

// get 1,2, or 3 randomly ((and assign it to variable roll))
// assign 1 to rock, 2 to paper, 3 to scissors 
// put all above into a function

function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3) + 1;

    if (roll === 1) {
        return "rock";
    } else if (roll === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
// to test: console.log(getComputerChoice());

// function to prompt for human's choice

let humanScore = 0;
let computerScore = 0;

const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissors = document.querySelector(".scissors")

const buttons = document.querySelectorAll("button");

const stat = document.querySelector(".stat");

const humansScore = document.querySelector("#human-score");
const computersScore = document.querySelector("#computer-score");



buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let humansChoice = button.textContent;
        let computersChoice = getComputerChoice();
        console.log("u picked " + humansChoice);
        console.log("computer picked " + computersChoice);
        playRound(humansChoice, computersChoice);
        if ((humanScore === 2)) {
            stat.textContent = "Game over! Congrats, you won!";
        } else if (computerScore === 2) {
            stat.textContent = "Game over! Computer won!";
            stat.classList.add("gameover");
        }
    })
})


// to test: console.log(getHumanChoice());

// create variables for scores



// create function for a round
//  - 2 arguments: humanChoice and computerChoice
//  - evaluation:
//      -draw
//      -human wins if (3 versions)
//      -computer wins if (3 versions) -- > but this will just be "else"
//  - add point to score and log winner announcement

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        stat.textContent = "Draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        stat.textContent = "You win this round!";
        // incrementing could also look like humanScore += 1 but i like the ++
        humanScore++;
    } else {
        stat.textContent = "Computer wins this round!";
        computerScore++;
    }
    humansScore.textContent = humanScore;
    computersScore.textContent = computerScore;
}


function playGame2() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`   Current score:
        you -> ${humanScore}
        computer -> ${computerScore}`);

    if (humanScore > computerScore) {
        console.log(" -- Yayy, you won the game! -- ")
    }
    else if (humanScore < computerScore) {
        console.log(" -- Oh no, you lost the game! -- ")
    }
    else {
        console.log(" -- Well, this looks like a tie. -- ")
    }
    // i really didn't have to repeat this in every if-result, looks better to just put it in the end, regardless of outcome.
    console.log(`   Final score:
        you -> ${humanScore}
        computer -> ${computerScore}`);
}

// playGame2(); to play it
/* end of fancy solution*/

//and these are some nifty stolen code pieces from other solutions
// look at this fancy ass option to make sure only valid choices are given:
/*this goes in the body of function declaration getHumanChoice:
if (
        humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors"
    ) {
        window.alert("Invalid choice! Please choose Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
    return humanChoice; */
