let endMessage=document.querySelector(".endMessage")
let userSelectionImg=document.querySelector(".userSelection")
let pcSelectionImg=document.querySelector(".pcSelection")
let message= document.querySelector(".message")
let userScorePlace =document.querySelector(".humanScore");
let machineScorePlace=document.querySelector(".pcScore");
let options = ["rock", "paper", "scissors"];
let userSelection =""; 
let machineSelection="";
let userScore=0;
let machineScore=0;
let checkMessage = document.getElementsByClassName("endMessage");
const winAudio=document.querySelector(".winAudio");
const loseAudio=document.querySelector(".loseAudio");


function userPlays(e){
        let selection=document.querySelector(`img[data-name="${e.toElement.dataset.name}"]`);
        if(!selection){
            return;
        }else if(checkMessage.length>0){
            resetGame();
        }
        else if (e.toElement.dataset.name==="redRock"){
            userSelectionImg.innerHTML=`<img src="file:///C:/Users/User/Desktop/Rock%20Paper%20Scissors/Images/redRock.png" 
            width="170px" height="170px">`;
            userSelection="rock";
            
        }else if (e.toElement.dataset.name==="redPaper"){
            userSelectionImg.innerHTML=`<img src="file:///C:/Users/User/Desktop/Rock%20Paper%20Scissors/Images/redPaper.png" 
            width="170px" height="170px">`;
            userSelection="paper";
            
        }else if (e.toElement.dataset.name==="redScissor"){
            userSelectionImg.innerHTML=`<img src="file:///C:/Users/User/Desktop/Rock%20Paper%20Scissors/Images/redScissor.png" 
            width="170px" height="170px">`;
            userSelection="scissors";
            
        }
        pcGetRandom();
        oneRound();
        endGame();
    }

function pcGetRandom(){
    let random = options[Math.floor(Math.random()*options.length)]
    if (random==="rock"){
        pcSelectionImg.innerHTML=`<img src="file:///C:/Users/User/Desktop/Rock%20Paper%20Scissors/Images/blueRock.png" 
            width="170px" height="170px">`;
        machineSelection="rock";
    }else if (random==="paper"){
        pcSelectionImg.innerHTML=`<img src="file:///C:/Users/User/Desktop/Rock%20Paper%20Scissors/Images/bluePaper.png" 
            width="170px" height="170px">`;
        machineSelection="paper";
    }else if (random==="scissors"){
        pcSelectionImg.innerHTML=`<img src="file:///C:/Users/User/Desktop/Rock%20Paper%20Scissors/Images/blueScissor.png" 
            width="170px" height="170px">`;
        machineSelection="scissors";
    } 
    
}

function oneRound (){
    if (machineSelection===userSelection){
        message.textContent="That was a tie, lets play again!";
    }else if ((userSelection==="rock" && machineSelection==="scissors") || 
    (userSelection==="paper" && machineSelection==="rock") ||
    (userSelection==="scissors" && machineSelection==="paper")){
        userScore++;
        message.textContent=" OMG you win this time, next i'll beat you";
        userScorePlace.innerHTML=userScore;
    }else if ((userSelection==="rock" && machineSelection==="paper") || 
    (userSelection==="paper" && machineSelection==="scissors") ||
    (userSelection==="scissors" && machineSelection==="rock")){
        machineScore++;
        message.textContent=" jejeje I won";
        machineScorePlace.innerHTML=machineScore;
    }
}

    
function endGame(){
    if((machineScore===5)&& (machineScore>userScore)){
        message.textContent="Game Over";
        userSelectionImg.innerHTML="";
        pcSelectionImg.innerHTML="";
        message.classList.add("endMessage");
        loseAudio.play();
    }else if ((userScore===5) && (machineScore<userScore)){
        message.textContent="You Win";
        userSelectionImg.innerHTML="";
        pcSelectionImg.innerHTML="";
        message.classList.add("endMessage");
        winAudio.play();
    }
}

function resetGame(){
        userScore=0;
        machineScore=0;
        userScorePlace.innerHTML=0;
        machineScorePlace.innerHTML=0;
        message.classList.remove("endMessage");
        userPlays();
    }


window.addEventListener("click", userPlays)