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

// prompt for getHumanChoice

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?", "rock").toLowerCase();
    return choice;
}
// to test: console.log(getHumanChoice());

// create variables for scores

let humanScore = 0;
let computerScore = 0;

// create function for a round
//  - 2 arguments: humanChoice and computerChoice
//  - evaluation:
//      -draw
//      -human wins if (3 versions)
//      -computer wins if (3 versions) -- > but this could be elsed i think
//  - add point to score and log winner announcement

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw, because " + humanChoice + " and " + computerChoice + " are pals :-)");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win this round, because your " + humanChoice + " beats computer's " + computerChoice + " B-)");
        humanScore++;
    } else {
        console.log("You lose this round, because your " + humanChoice + " is destroyed by computer's " + computerChoice + " :,-(");
        computerScore++;
    }
}


playRound(getHumanChoice(), getComputerChoice());
console.log(`Current score:
you -> ${humanScore}
computer -> ${computerScore}`);


playRound(getHumanChoice(), getComputerChoice());
console.log(`Current score:
you -> ${humanScore}
computer -> ${computerScore}`);


playRound(getHumanChoice(), getComputerChoice());
console.log(`Current score:
you -> ${humanScore}
computer -> ${computerScore}`);


playRound(getHumanChoice(), getComputerChoice());
console.log(`Current score:
you -> ${humanScore}
computer -> ${computerScore}`);

playRound(getHumanChoice(), getComputerChoice());
console.log(`Current score:
you -> ${humanScore}
computer -> ${computerScore}`);