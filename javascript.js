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

function playRound(humanChoice, computerChoice){

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

for(let i = 0; i < 5; i++){
    playRound(humanSelection, computerSelection);
}
