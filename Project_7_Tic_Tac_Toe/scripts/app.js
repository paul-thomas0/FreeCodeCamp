/*gameLoop is a gaming terminology for a
 * loop that calls itself repeatedly until
 * the Game Over conditions are met
 */

function gameLoop(userChoice) {
    /*Loop till the following conditions are fulfilled
     * 1. If one of the player wins the game
     * 2. If there is a draw
     * output the result of the game
     * check if the user wants to reset, then reset
     * the game
     *
     */
    var win = false;
    var winner = "";
    var draw = false;
    var count = 0;
    $(".stage-col").click(function(){
        var pos = $(this).data("num");
        xPos = Math.floor(pos%3);
        yPos = Math.floor(pos/3);
        $(this).text(userChoice);
        gameStage[xPos][yPos] = userPlayer;
        //console.log(pos);
        console.log(gameStage);
        usermadeMove = true;
        console.log(didWin());
    });
}

function didWin() {
    //for all the rows horizontally
    for(var i = 0; i < 3; i++) {
        //check for user
        if(gameStage[0][i] === userPlayer && gameStage[1][i] === userPlayer
            && gameStage[2][i] === userPlayer) {
                return "user";
            }//check for ai
        else if(gameStage[0][i] === aiPlayer && gameStage[1][i] === aiPlayer
            && gameStage[2][i] === aiPlayer) {
                return "aiPlayer";
            }
    }
    //for all cols vertically
    for(var i = 0; i < 3; i++) {
        //check for user
        if(gameStage[i][0] === userPlayer && gameStage[i][1] === userPlayer
            && gameStage[i][2] === userPlayer) {
                return "user";
            } else if(gameStage[i][0] === aiPlayer && gameStage[i][1] === aiPlayer
               && gameStage[i][2]) {
                    return "ai";
                }
    }
    //for diagonals
    for(var i = 0; i < 3; i++) {
        if(gameStage[0][0] === userPlayer && gameStage[1][1] === userPlayer
            && gameStage[2][2] === userPlayer) {
                return "user";
            }
        else if(gameStage[0][2] === userPlayer && gameStage[1][1] === userPlayer
                && gameStage[2][0] === userPlayer) {
                    return "user";
                }
        else if(gameStage[0][0] === aiPlayer && gameStage[1][1] === aiPlayer
            && gameStage[2][2] === aiPlayer) {
                return "ai";
            }
        else if(gameStage[0][2] === aiPlayer && gameStage[1][1] === aiPlayer
            && gameStage[2][0] === aiPlayer) {
                return "ai";
            }

    }
    if(drawCount === 8) {
        return "draw";
    }
}

function ai() {

}

