let msg = document.querySelector("#msg");
let userScores = document.querySelector("#user-score");
let compScores = document.querySelector("#comp-score");


let userScore= 0;

let compScore= 0;

const choices = document.querySelectorAll(".choice");



// to create random computer's choice
const GenCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    
    const randIdx = Math.floor(Math.random()*3 )// multiply with 3 to math.random() to get range from 0 to 2 
    
    return options[randIdx]; 

};



// action to be performed when game draw
 const drawGame = ()  => {
   msg.innerText= "The game is draw😒 Try Again";
 };



 // to show the winner 
const showWinner =(userWin,compChoice) =>{
    if (userWin===true) {
        userScore++;
        userScores.innerText = userScore
        console.log("you are winner")
        msg.innerText = `You Won Khushi!😁🥳Computer choosed ${compChoice}`;
       
        
    }else{
        compScore++;
        compScores.innerText = compScore;
        console.log("computer is winner")
        msg.innerText = `Computer Won!😖 Computer choosed ${compChoice}`;
        
    };

};


//conditions for playing the game
const playGame = (userChoice) =>{
    console.log("users choice",userChoice);

    //computer choice
    const compChoice = GenCompChoice();
    console.log("computer's choice" ,compChoice);

    // to draw the game
    if (userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
         if (userChoice=== "rock") {
             userWin = compChoice==="paper"? false : true ;
            
         }else if(userChoice=== "paper"){
            userWin = compChoice==="scissors"? false : true;


         }else if(userChoice=== "scissors"){
            userWin = compChoice==="rock"? false : true;
            

         }
         showWinner(userWin,compChoice);

    }
      
 
};





// for adding event listener when clicked 

choices.forEach((choice)=> {

     choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
     })
});


