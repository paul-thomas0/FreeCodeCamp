var userClicks = 0;
var levels = 0;
var randomNumberArray = [];
var switchClicked = false;
var startClicked = false;
var strictClicked = false;

var baseSoundUrl = 'https://s3.amazonaws.com/freecodecamp/';
var audio = ["simonSound1.mp3",
    "simonSound2.mp3",
    "simonSound3.mp3",
    "simonSound4.mp3"];


$(document).ready(function() {
    $('.game-screen-on-off-button').click(function() {
            if(!switchClicked) {
            $('.game-screen-on-off-button-switch').css('left', '+=38');
            switchClicked = true;
            inGameUI();
        } else if(switchClicked) {
            $('.game-screen-on-off-button-switch').css('left', '-=38');
            switchClicked = false;
            inGameUI();
        }
    });
    $('.game-screen-start-button').click(function() {
        if(switchClicked && !startClicked) {
            startClicked = true;
            $('.game-screen-start-button-inner').css('background-color', 'green');
            gameLoop();
            //inGameUI();
        } else if(switchClicked && startClicked) {
            startClicked = false;
            $('.game-screen-start-button-inner').css('background-color', '#F2EDD8');
        }
    });
    $('.game-screen-strict-button').click(function() {
        if(switchClicked && startClicked && !strictClicked) {
            strictClicked = true;
            $('.game-screen-strict-button-inner').css('background-color', 'blue');
        } else if(switchClicked && startClicked && strictClicked) {
            strickClicked = false;
            $('.game-screen-strict-button-inner').css('background-color', '#F2EDD8')
        }
    })

    //a simple test case of testing the sound from the game
    var audio = ["simonSound1.mp3",
    "simonSound2.mp3",
    "simonSound3.mp3",
    "simonSound4.mp3"];
    $('.game-stage-top div').click(function() {
        console.log($(this).attr("data-bnum"));
        var i = $(this).attr("data-bnum");
        new Audio(baseSoundUrl + audio[i]).play();
    })

    $('.game-stage-bottom div').click(function() {
        console.log($(this).attr("data-bnum"));
        var i = $(this).attr("data-bnum");
        new Audio(baseSoundUrl + audio[i]).play();
    })
});

function inGameUI() {
    //call computer state
    if(switchClicked) {
        $('.game-screen-start-button-inner').css('background-color', '#F2EDD8');
        $('.game-screen-strict-button-inner').css('background-color', '#F2EDD8');
        //gameLoop();
    } else if(!switchClicked) {
        $('.game-screen-start-button-inner').css('background-color', '#5D4C46');
        $('.game-screen-strict-button-inner').css('background-color', '#5D4C46');

    }
    //after computer is finished call wait for userinput
}

function generateRandArray() {
    for(var i = 0; i < 20; i++) {
        randomNumberArray[i] = getRandomInt(0, 3);
    }

}
function getRandomInt(min, max) {
    //console.log("min = ", min);
    //console.log("max = ", max);
    console.log(Math.floor(Math.random() *(max - min +1)));
    return Math.floor(Math.random() * (max-min + 1));
}

function gameLoop() {

    console.log("inside game loop");
    generateRandArray();
    if(switchClicked && startClicked && !strictClicked) {
        //a simple test case
        var i = 0;
        //game starts
        playSoundInInterval(19);
        //start the loop
        //play the sound && change the color according to the level
        //wait for the user to start attempting the sequence
        //if the sequence is not correct restart the level
        //if the sequence was correct increment the level
    }
}

var j = 0;

function playSoundInInterval(i) {
    $('*[data-bnum="'+randomNumberArray[j]+'"]').css('opacity', '.5');
    new Audio(baseSoundUrl + audio[randomNumberArray[j]]).play();
    setTimeout(function() {
        $('*[data-bnum="'+randomNumberArray[j]+'"]').css('opacity', '1');
    }, 300);
    setTimeout(function() {
        if(j <= i) {
            j++;
            playSoundInInterval(i);
        }
    }, 390)
}
