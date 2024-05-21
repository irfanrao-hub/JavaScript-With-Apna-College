let userscore = 0;
let compsocore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const gentcompchoice = () => {
    const options = ["rock","paper", "scissors" ];
    const randnum = Math.floor(Math.random() *3);
    return options[randnum];
};

const drawgame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "rgb(4, 0, 10)";
};

const showWinner = (userwin, userChoice, compchoice) => {
    if(userwin) {
        userscore ++;
        userscorepara.innerText = userscore;
       
        msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compsocore++;
        compscorepara.innerText = compsocore;
    msg.innerText = `You Lose ${compchoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //gentrate computer choice --> modular
    const compchoice = gentcompchoice();
    console.log("Computer choice =", compchoice);

    if(userChoice === compchoice ) {
      drawgame();
        //draw game
    } else {
        let userwin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userwin = compchoice === "paper" ? false : true;
        }
        else if ( userChoice === "paper") {
            //rock,scissor
            userwin = compchoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compchoice );
    }
};

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("Choice wa Clicked", userchoice)
        playgame(userchoice);
    });
    
});