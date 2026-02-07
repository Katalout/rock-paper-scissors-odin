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
//      -computer wins if (3 versions) -- > but this will just be "else"
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
        // incrementing could also look like humanScore += 1 but i like the ++
        humanScore++;
    } else {
        console.log("You lose this round, because your " + humanChoice + " is destroyed by computer's " + computerChoice + " :,-(");
        computerScore++;
    }
}

// lazy solution: just copy paste the function of round (+status message) 5 times
// wrap them in the playgame function, add the final message to the end and bam you've got the game :D

function playGame() {
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

    if (humanScore > computerScore) {
        console.log(`Yayy, you won the game!
Final score:
    you -> ${humanScore}
    computer -> ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`Oh no, you lost the game!
Final score:
    you -> ${humanScore}
    computer -> ${computerScore}`);
    }
    else {
        console.log(`Well, this looks like a tie.
Final score:
    you -> ${humanScore}
    computer -> ${computerScore}`);
    }
}

// playGame(); to play it

/* now for some fancier solution*/

function playGame2() {
    for (let i = 1; i <= 5; i++) {
        //still don't know why Odin instructs to put getHumanChoice() and getComputerChoice() into new variables and put those to the playRound parameters.. is it just to make it look prettier, or is there some kind of performance reason?
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`   Current score:
        you -> ${humanScore}
        computer -> ${computerScore}`);
    }
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
