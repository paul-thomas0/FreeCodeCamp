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

    $(".stage-col").unbind().click(function() {
        //console.log("user has clicked the interface");
        var pos = $(this).data("num");
        var xPos = Math.floor(pos%3);
        var yPos = Math.floor(pos/3);
        gameStage[xPos][yPos] = userPlayer;
        $(this).text(userChoice);
        if(firstTime) {
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
            } while(col == yPos);
            gameStage[row][col] = aiPlayer;
            updateInterface(row, col, aiChar);
            }
            firstTime = false;
            count++;
        } else {
            var tempArr = ai();
            if(count < 4) {
                gameStage[tempArr[0]][tempArr[1]] = aiPlayer;
            }
            updateInterface(tempArr[0], tempArr[1], aiChar);
            count++;
            console.log(count);
            if(didWin() === "ai") {
                console.log("ai wins");
                announceTheWinner("ai");
            } else if(didWin() === "user") {
                console.log("user wins");
                announceTheWinner("user");
            } else if(didWin() === "draw" && count == 4) {
                console.log("It's a draw!");
                announceTheWinner("draw");
            }
        }
    });
}

function didWin() {
    //for rows
    for(var i = 0; i < 3; i++) {
        if(gameStage[i][0] == gameStage[i][1]
            && gameStage[i][1] == gameStage[i][2]) {
                //console.log("for rows");
                if(gameStage[i][0] == aiPlayer) {
                    return "ai";
                }
            else if(gameStage[i][0] == userPlayer) {
                return "user";
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
                    return "ai";
                }
                else if(gameStage[0][i] == userPlayer) {
                    return "user";
                }
            }
    }

    //check for diagonals
    if(gameStage[0][0] == gameStage[1][1]
        && gameStage[1][1] == gameStage[2][2]) {
            //console.log("for diagnols");
            if(gameStage[0][0] == aiPlayer) {
                return "ai";
            }
            else if(gameStage[0][0] == userPlayer) {
                return "user";
            }
        }

    if(gameStage[0][2] == gameStage[1][1]
        && gameStage[1][1] == gameStage[2][0]) {
            //console.log("for diagnonls");
            if(gameStage[0][2] == aiPlayer) {
                return "ai";
            }
            else if(gameStage[0][2] == userPlayer) {
                return "user";
            }
        }


    return "draw";
}
function reset() {
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            gameStage[i][j] = empty;
        }
    }
    console.log(gameStage);
    drawCount = 0;
    firstTime = true;
    clearInterface();
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
