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
    //this is a change
    var win = false;
    var winner = "";
    var draw = false;
    var count = 0;
    var aiChar = "";
    var firstTime = true;

    if(userChoice.trim().localeCompare("X") == 0) {
        console.log("userChoice is X");
        aiChar = "O";
    } else {
        console.log("userChoice is O");
        aiChar = "X";
    }
    console.log("assigned aiChar = " + aiChar);

    $(".stage-col").unbind().click(function() {
        //console.log("user has clicked the interface");
        var pos = $(this).data("num");
        var xPos = Math.floor(pos%3);
        var yPos = Math.floor(pos/3);
        //console.log("pos", pos, "\nxPos", xPos, "yPos", yPos, "\nbefore assigning",
        //gameStage);
        gameStage[xPos][yPos] = userPlayer;
        //console.log("after assigning userPlayer");
        //console.log("gameStage = ", gameStage,"firstTime",  firstTime);
        $(this).text(userChoice);
        if(firstTime) {
            //console.log("firstTime condition has been fulfilled");
            if(gameStage[1][1] === empty) {
                console.log("inside here");
                gameStage[1][1] = aiPlayer;
                updateInterface(1, 1, aiChar);
            } else {
            var row = 0;
            var col = 0;
            do {
                row = Math.floor(Math.random() * 3);
                col = Math.floor(Math.random() * 3);
                //console.log("inside do while");
                //console.log("row", "xPos", row, xPos, "col", "yPos", col, yPos);
            } while(col == yPos);
            gameStage[row][col] = aiPlayer;
            updateInterface(row, col, aiChar);
            }
            firstTime = false;
        } else {
            //console.log("Take a look at the gameStage");
            //console.log(gameStage);
            //console.log("Calling the AI");
            var tempArr = ai();
            //console.log("after callin AI");
            //console.log("row", tempArr[0], "col", tempArr[1]);
            gameStage[tempArr[0]][tempArr[1]] = aiPlayer;
            updateInterface(tempArr[0], tempArr[1], aiChar);
        }
    });
}
function ai() {
    var row = -1;
    var col = -1;
    var bestVal = -9999;
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if(gameStage[i][j] === empty) {
                gameStage[i][j] = aiPlayer;
                var moveVal = minimax(0, false);
                gameStage[i][j] = empty;
                if(moveVal > bestVal) {
                    bestVal = moveVal;
                    row = i;
                    col = j;
                }
            }
        }
    }
    console.log("bestVal", bestVal);
    return [row, col, bestVal];
}
function minimax(depth, isMax) {
    var score = evaluate(depth);
    //console.log("In Minimax function");
    //console.log("The score = " + score);
    if(score >= 10) {
        return score;
    }
    if(score <= -10) {
        return score;
    }
    if(isMoveLeft() === false) {
        return 0;
    }
    if(isMax) {
        //console.log("max player");
        var best = -1000;
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if(gameStage[i][j] === empty) {
                    gameStage[i][j] = aiPlayer;
                    best = maximum(best, minimax(depth + 1, !isMax));
                    gameStage[i][j] = empty;
                }
            }
        }
        //console.log("best", best);
        return best;
    } else {
        //console.log("min player");
        var best = 1000;
        for( var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if(gameStage[i][j] === empty) {
                    gameStage[i][j] = userPlayer;
                    best = minimum(best, minimax(depth + 1, !isMax));
                    gameStage[i][j] = empty;
                }
            }
        }
        //console.log("best", best);
        return best;
    }
}

function evaluate(depth) {    //console.log("in evaluate");
    //for rows
    for(var i = 0; i < 3; i++) {
        if(gameStage[i][0] == gameStage[i][1]
            && gameStage[i][1] == gameStage[i][2]) {
                //console.log("for rows");
                if(gameStage[i][0] == aiPlayer) {
                    return 10+depth;
                }
            else if(gameStage[i][0] == userPlayer) {
                return -(10+depth);
            }
                //return -10;
        }
    }

    //for columns
    for(var i = 0; i < 3; i++) {
        if(gameStage[0][i] == gameStage[1][i]
            && gameStage[1][i] == gameStage[2][i]) {
                //console.log("for cols");
                if(gameStage[0][i] == aiPlayer) {
                    return 10+depth;
                }
                else if(gameStage[0][i] == userPlayer) {
                    return -(10+depth);
                }
            }
    }

    //check for diagonals
    if(gameStage[0][0] == gameStage[1][1]
        && gameStage[1][1] == gameStage[2][2]) {
            //console.log("for diagnols");
            if(gameStage[0][0] == aiPlayer) {
                return 10+depth;
            }
            else if(gameStage[0][0] == userPlayer) {
                return -(10+depth);
            }
        }

    if(gameStage[0][2] == gameStage[1][1]
        && gameStage[1][1] == gameStage[2][0]) {
            //console.log("for diagnonls");
            if(gameStage[0][2] == aiPlayer) {
                return 10+depth;
            }
            else if(gameStage[0][2] == userPlayer) {
                return -(10+depth);
            }
        }


    return 0;
}

function maximum(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

function minimum(a, b) {
    if(a < b) {
        return a;
    } else {
        return b;
    }
}

function isMoveLeft() {
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if(gameStage[i][j] === empty) {
                return true;
            }
        }
    }
    return false;
}
