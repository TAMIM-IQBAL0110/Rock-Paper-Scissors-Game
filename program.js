let computerScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".game");
const message = document.querySelector("#ins-msg");
const scores = document.querySelectorAll(".score"); // NodeList of elements with class 'score'
const setScoreUser = scores[0].querySelector("#user_score"); // Accessing first score div
const setScoreComputer = scores[1].querySelector("#computer_score"); // Accessing second score div
const selection = document.querySelectorAll(".select");
console.log(selection);

const user_choice = selection[0].querySelector("#userChoice");
const computer_choice = selection[1].querySelector("#computerChoice");

const generateComputerChoice = ()=>{
    // rock , paper, scissor 
    const option = ["rock","paper","scissors"]
    const randomIndex = Math.floor(Math.random()*3);
    return option[randomIndex];
}

const drawGame = ()=>{
    console.log("Game is Draw");
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        setScoreUser.innerText = userScore.toString();
        message.innerText = "You Win!!";
        message.style.backgroundColor = "Green";
    }
    else {
        message.innerText = "You Loss!!";
        computerScore++;
        setScoreComputer.innerText = computerScore.toString();
        message.style.backgroundColor = "Red";
    }
}
const playGame = (userChoice)=>{
    //console.log("User Choice = ",userChoice);
    const cmpChoice = generateComputerChoice();
    //console.log("Computer choice = ",cmpChoice);
    computer_choice.innerText = "Computer Choice: "+cmpChoice.toUpperCase();


    
    if(userChoice === cmpChoice){
        drawGame();
        message.innerText = "Draw,Play Again";
        message.style.backgroundColor = "Black";

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (cmpChoice === "paper")?false:true;
        }
        else if(userChoice === "paper"){
            userWin = (cmpChoice === "scissors")?false:true;
        }
        else {
            userWin = (cmpChoice === "rock")?false:true;
        }
        showWinner(userWin);
    }

}
choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userChoice = choice.getAttribute("id");
            user_choice.innerText = "User Choice: "+userChoice.toUpperCase();
            playGame(userChoice);
        })
    }
)