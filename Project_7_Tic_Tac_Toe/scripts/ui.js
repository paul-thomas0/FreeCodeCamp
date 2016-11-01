/*Logic for Tic-Tac-Toe:
 * Separation of UI, Logic, And AI
 * */
var userPlayer = -3;
var aiPlayer = -2;
var empty = -1;
var userMadeMove = false;
var drawCount = 0;
var userScore = 0;
var aiScore = 0;
var drawScore = 0;
var userChoice = "";
var aiChar = "";
var firstTime = true;

var gameStage = [[empty, empty, empty],
[empty, empty, empty],
[empty, empty, empty]];

//User Interface Logic
$(document).ready(function() {
	var user = "";
	var computer = "";

    $(".winner-announcer").hide();

	//Prompt the user for X or O and store it
	$(".options-box").fadeIn("slow");
	$(".x-or-o").click(function() {
        userChoice = $(this).text();
        console.log("userChoice = " + userChoice.trim());
        if(userChoice.trim().localeCompare("X") == 0) {
            aiChar = "O";
        } else {
            aiChar = "X";
        }
        $(".options-box").fadeOut("slow");
        gameLoop(userChoice);
	});
	//Prompt if the user wants to start first and store it
    //or let the user start first
	//if the user starts first wait for the input
	//if the AI is to start first randomly choose a box
	//then on call the game loop
   // gameLoop(user);
});

function updateInterface(row, col, aiChar) {
    var number = col * 3 + row;
    console.log("number = " + number);
    $('*[data-num="'+number+'"]').text(aiChar);
}

function clearInterface() {
    for(var i = 0; i < 9; i++) {
        $('*[data-num="'+i+'"]').text("");
    }
}

function announceTheWinner(winner) {
    if(winner === "ai") {
        updateScore(winner);
        updateScoreInterface(winner);
        announcerBox("desktop", "I WIN");
    } else if(winner === "user") {
        updateScore(winner);
        updateScoreInterface(winner)
        announcerBox("user", "YOU WON");
    } else if(winner === "draw") {
        updateScore(winner);
        updateScoreInterface(winner);
        announcerBox("refresh", "RETRY");
    }
}

function announcerBox(whoWon, text) {
    $(".winner-announcer").fadeIn(2000);
    $(".winner-announcer").html('<i class="fa fa-'+whoWon+' aria-hidden="true"></i><br/>'+text+'');
    $(".winner-announcer").click(function() {
        $(this).fadeOut(1000);
        reset();
    })
}

function updateScore(whichScore) {
    if(whichScore === "user") {
        userScore++;
    } else if(whichScore === "ai") {
        aiScore++;
    } else if(whichScore === "draw") {
        drawScore++;
    }
    console.log("All scores", userScore, aiScore, drawScore);
}

function updateScoreInterface(whichScore) {
    console.log("updateScoreInterface = " + whichScore);
    if(whichScore === "user") {
        $(".user-points").text(userScore);
    } else if(whichScore === "ai") {
        $(".computer-points").text(aiScore);
    } else if(whichScore === "draw") {
        $(".draw-points").text(drawScore);
    }
}
