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

const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissors = document.querySelector(".scissors")

const buttons = document.querySelectorAll("button");

const div = document.querySelector("div");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let humansChoice = button.textContent;
        let computersChoice = getComputerChoice();
        console.log("u picked " + humansChoice);
        console.log("computer picked " + computersChoice);
        let para = document.createElement("p");
        para.textContent += ` -- u picked ${humansChoice},
                            computer picked ${computersChoice} -- `;
        div.appendChild(para);
        playRound(humansChoice, computersChoice);
        if ((humanScore === 5) || (computerScore === 5)) {
            let para = document.createElement("h1");
            para.textContent += `GAME OVER`;
            para.style.textAlign = "center";
            para.style.color = "purple";
            div.appendChild(para);
        }
    })
})


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
        let para = document.createElement("p");
        para.textContent += "   Draw, because " + humanChoice + " and " + computerChoice + " are pals :-)";
        div.appendChild(para);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        let para = document.createElement("p");
        para.textContent += "   You win this round, because your " + humanChoice + " beats computer's " + computerChoice + " B-)";
        div.appendChild(para);
        // incrementing could also look like humanScore += 1 but i like the ++
        humanScore++;
    } else {
        let para = document.createElement("p");
        para.textContent += "   You lose this round, because your " + humanChoice + " is destroyed by computer's " + computerChoice + " :,-(";
        div.appendChild(para);
        computerScore++;
    }
    let para = document.createElement("p");
    para.textContent += " current score: You: " + humanScore + " Computer: " + computerScore;
    para.style.textAlign = "center";
    div.appendChild(para);
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
