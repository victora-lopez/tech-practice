function gameChoices(choiceNum){
    const choices = ["rock", "paper", "scissors"];
    return choices[choiceNum];
}

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    return gameChoices(choice);
}

function getHumanChoice(){
    choice = parseInt(prompt("Please select a value that corresponds to your choice from the menu below:\n1: Rock\n2: Paper\n3: Scissors\n")) - 1;
    return gameChoices(choice);
}

function resultCheck(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Tie";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"){
                return "Win";
            }
    else{
        return "Loss";
    }
}

function playRound(humanChoice, computerChoice){
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    result = resultCheck(humanChoice, computerChoice);
    switch(result){
        case "Win":
            console.log("Congrats you won this round!\n");
            break;
        case "Tie":
            console.log("This round was a tie\n");
            break;
        case "Loss":
            console.log("Sorry! You lost this round :(\n");
            break;
    }
    return result;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        switch(result){
            case "Win":
            humanScore++;
            break;
        case "Tie":
            break;
        case "Loss":
            computerScore++;
            break;
        }
    }
    console.log("Final Score is " + humanScore + " - " + computerScore);
}

playGame();
