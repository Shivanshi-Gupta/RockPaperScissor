let userScore=0, compScore=0;
const choices=document.querySelectorAll(".choose");
const message=document.querySelector("#msg");
const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");

choices.forEach((choose)=>{
    choose.addEventListener("click",(evt)=>{
        const userChoice=choose.getAttribute("id");
        playGame(userChoice);
    });
});

//MODULAR way of programming -> creating reusable functions
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    // Math.random() {class.method()} ->generates number in range 0-1
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    // console.log(`user choice: ${userChoice}\ncomputer choice: ${compChoice}`);
    
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin;
        if(userChoice==='rock'){
            userWin=compChoice==='paper'? false: true;
        }
        else if(userChoice==='paper'){
            userWin=compChoice==='scissor'? false: true;
        }
        else{
            userWin=compChoice==='rock'? false: true;
            }
        winner(userWin,userChoice,compChoice);
        }
};
const drawGame=()=>{
    message.innerText="Game was draw. Play again";
    message.style.backgroundColor="black";
};
const winner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        message.innerText=`You win! ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        message.innerText=`You lose, ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor="red";
    }
}