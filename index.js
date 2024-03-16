
const choices = ["rock", "paper", "sicssors"];

 const playerDisplay = document.getElementById("playerDisplay");
 const computerDisplay = document.getElementById("computerDisplay");
 const resultDisplay = document.getElementById("resultDisplay");
 const playerScoreDisplay = document.getElementById("playerScoreDisplay");
 const computerScoreDisplay = document.getElementById("computerScoreDisplay");
 const success = document.getElementById("success");
 const failure = document.getElementById("failure");
 const popUp = document.getElementById("popUp");
 const popUpTitle = document.getElementById("popUpTitle");
 const popUpMsg = document.getElementById("popUpMsg");
 const title = document.getElementById("title")
 const comScoreDisplay = document.getElementById("comScoreDisplay");
 const plyScoreDisplay = document.getElementById("plyScoreDisplay");

 let playerScore = 0;
 let computerScore = 0;

 function playGame(playerChoice){
   const computerChoice = choices[Math.floor(Math.random() * 3)]
   let result;



 if(playerChoice === computerChoice){
   result = "IT'S A TIE"
 }else if(playerChoice === "paper" && computerChoice === "sicssors"){
   result = "YOU LOSE!";
   computerScore++;
 }else if(playerChoice === "paper" && computerChoice === "rock"){
   result = "YOU WIN!";
   playerScore++;
 }else if(playerChoice === "rock" && computerChoice === "paper"){
   result = "YOU LOSE!"
   computerScore++;
 }else if(playerChoice === "rock" && computerChoice === "sicssors"){
   result = "YOU WIN!";
   playerScore++;
 }else if(playerChoice === "sicssors" && computerChoice === "rock"){
   result = "YOU LOSE!"
   computerScore++;
 }else if(playerChoice === "sicssors" && computerChoice === "paper"){
   result = "YOU WIN!";
   playerScore++;
 }

 if(result === "YOU WIN!"){
   resultDisplay.style.color = "green";
 }else if(result === "YOU LOSE!"){
   resultDisplay.style.color = "red";
 }else{
   resultDisplay.style.color = "black";

 }

 if(playerScore == 10){
   popUp.style.display = "inline";
   success.style.display = "inline-block";
   popUpTitle.style.color = "#2aff5b";
 }else if(computerScore == 10){
   popUp.style.display = "inline";
   failure.style.display = "inline-block";
   popUpTitle.style.color = "#ff2a23";
   popUpTitle.textContent = "متاسفانه باختی"
   popUpMsg.textContent = " کامپیوتر تونست تو رو شکست بده اگه میخوای دوباره بازی کنی روی دکمه زیر کلیک کن";
 }
 if(popUp.style.display == "inline"){
   title.style.filter = "blur(5px)";
   comScoreDisplay.style.filter = "blur(5px)";
   plyScoreDisplay.style.filter = "blur(5px)";
 }
 if(computerScore == 10){
   popUp.style.display = "inline";
 }

   playerDisplay.textContent = `PLAYER: ${playerChoice}`;
   computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
   resultDisplay.textContent = result;
   playerScoreDisplay.textContent = playerScore;
   computerScoreDisplay.textContent = computerScore;

 
 }

 document.getElementById("reloadBtn").onclick = () => {
   location.reload()
 };
