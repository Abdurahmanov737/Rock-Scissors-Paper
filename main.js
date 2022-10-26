var movesArr = ["rock", "paper", "scissors"];
var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
var myModal = document.getElementById("main-modal")
var outp = document.getElementById("outp")
var scoreOut = document.getElementById("score")

//these are for calculating the scores of players and Draw cases.
//-------------------------------------------------------------
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var scoreDraw = 0;
//-------------------------------------------------------------

var playBtn = document.getElementById("playBtn")
var closeBtn = document.getElementById("closeBtn")

closeBtn.onclick = function () {

    myModal.classList.remove("visible")
    player1.innerHTML = ""
    player2.innerHTML = ""

}

//this is for adding icons to HTML based on randoms
//function takes 2 parameters: playerInfo and indexOfMove
//playerInfo is for specifying for which player the icons need to be added for(player1, player2)
//indexOfMove is for specifying for which move the icons need to be added for(rock, paper, scissors) 
var playerMovesAdd = function (playerInfo, indexOfMove) {
    if (indexOfMove == 0) {
        //these are the indexes of the moves which are located in movesArr array
        //if the index is 0 it means it is "Rock"
        playerInfo.innerHTML = `
        <div class="moves rock">
        <i class="fa-solid fa-hand-back-fist"></i>

        </div>
        `

    } else if (indexOfMove == 1) {
        //if the index is 1 it means it is "Paper"

        playerInfo.innerHTML = `
        <div class="moves paper">
        <i class="fa-solid fa-hand"></i>
            
        </div>
        `
    } else if (indexOfMove == 2) {
        //if the index is 2 it means it is "Scissors"

        playerInfo.innerHTML = `
        <div class="moves scissors">
        <i class="fa-solid fa-hand-scissors"></i>

    </div>
        `
    } else {
        alert("Error! PLease refresh the page!")
    }
}

playBtn.onclick = function () {

    //here we assign randomly choosen move from movesArr to player1 and player2
    var player1move = Math.floor(Math.random() * movesArr.length)
    var player2move = Math.floor(Math.random() * movesArr.length)

    // for testing
    // console.log(player1move)


    //here we call the function to add choosen move to the DOM
    playerMovesAdd(player1, player1move)
    playerMovesAdd(player2, player2move)



    if (player1move == player2move) {
        scoreDraw++;
        outp.textContent = "It is a Draw!"
        scoreOut.textContent = scoreDraw + " times Draw!"
        myModal.classList.add("visible")
    } else if (
        (player1move == 0 && player2move == 2) ||
        (player1move == 2 && player2move == 1) ||
        (player1move == 1 && player2move == 0)) {
        scorePlayer1++;
        outp.textContent = "Player 1 Wins!"
        scoreOut.textContent = "Player 1: " + scorePlayer1 + " " + scorePlayer2 + ": Player 2"
        myModal.classList.add("visible")
    } else {
        scorePlayer2++;
        outp.textContent = "Player 2 Wins!"
        scoreOut.textContent = "Player 1: " + scorePlayer1 + " " + scorePlayer2 + ": Player 2"

        myModal.classList.add("visible")
    }


}