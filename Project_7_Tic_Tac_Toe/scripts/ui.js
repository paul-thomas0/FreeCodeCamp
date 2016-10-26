/*Logic for Tic-Tac-Toe:
 * Separation of UI, Logic, And AI
 * */
var userPlayer = -3;
var aiPlayer = -2;
var empty = -1;
var userMadeMove = false;
var drawCount = 0;
var gameStage = [[empty, empty, empty],
[empty, empty, empty],
[empty, empty, empty]];

//User Interface Logic
$(document).ready(function() {
	var user = "";
	var computer = "";
	console.log("this is your life");

	//Prompt the user for X or O and store it
	$(".options-box").fadeIn("slow");
	$(".x-or-o").click(function() {
        user = $(this).text();
        console.log("user = " + user);
        $(".options-box").fadeOut("slow");
        gameLoop(user);
	});
	//Prompt if the user wants to start first and store it
    //or let the user start first
	//if the user starts first wait for the input
	//if the AI is to start first randomly choose a box
	//then on call the game loop
   // gameLoop(user);
});
//Functionality Logic
function gameLoop() {
	//loop till the following conditions are fulfilled
	//1. If one of the player wins the game
	//2. If there is a draw
	//output the result of the game game
	//check if the user wants to reset then reset
}
//Game AI Logic
function AILogic() {
}


