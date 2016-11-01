$(function() {
  $("#break-slider-horizontal").slider({
    orientation: "horizontal",
    range: "min",
    min: 1,
    max: 60,
    value: 60,
    slide: function(event, ui) {
             $("#break-display").text(ui.value);
           }
    });
    $("#break-display").text($("#break-slider-horizontal").slider("value"));
});

$(function() {
  $("#timer-slider-horizontal").slider({
    orientation: "horizontal",
    range: "min",
    min: 1,
    max: 60,
    value: 60,
    slide: function(event, ui) {
             $("#timer-display").text(ui.value);
           }
  });
  $("#timer-display").text($("#timer-slider-horizontal").slider("value"));
});
$(window).on('load', function() {
  if($(window).height() > 480) {
    $('#timer-display').addClass('time-normal');
    $('#timer-display').removeClass('time-small');
    $('#break-display').addClass('break-normal');
    $('#break-display').removeClass('break-small');
  } else {
      $('#timer-display').addClass('time-small');
      $('#timer-display').removeClass('time-normal');
      $('#break-display').addClass('break-small');
      $('#break-display').removeClass('break-normal');
    }
});
var timer_nIntervId = false;//a specific id assigned to timer
var timer_minutes = 0;//timer minutes count
var timer_seconds = 0;//timer seconds count
var timer_check = true;//check if the timer has started

var break_nIntervId = false;//a unique id assigned to break
var break_minutes = 0;//break minutes count
var break_seconds = 0;//break seconds count
var break_check = true;//check if the break has started

var TIMER_VAR = 0;
var BREAK_VAR = 1;

var timer_or_break = TIMER_VAR;

function startPodomoroTimer() {
  if(timer_check && timer_or_break === TIMER_VAR) {
    if(timer_nIntervId) {
      clearInterval(timer_nIntervId);
      timer_nIntervId = false;
    }else {
       var temp = $("#timer-display").text().split(":");
       timer_minutes = temp[0];
       break_nIntervId = false;
       $("#timer-slider-horizontal").slider("disable");
       $("#break-slider-horizontal").slider("disable");
       timer_nIntervId = setInterval(reduceAsecond, 1000);
     }
     console.log("Ended");
   }else if(break_check && timer_or_break === BREAK_VAR) {
           if(break_nIntervId) {
             clearInterval(break_nIntervId);
             break_nIntervId = false;
           }else {
              var temp = $("#break-display").text().split(":");
              break_minutes = temp[0];
              timer_nIntervId = false;
              break_nIntervId = setInterval(reduceAsecond, 1000);
            }
     }
     console.log("Totally ended");
}

function reduceAsecond() {
  console.log("inside reduceAsecond");
  console.log("timer_minutes: " + timer_minutes);
  if(timer_minutes < 0) {
    console.log("in here again");
    sound();
    stopTheTimer();
    if(timer_or_break === TIMER_VAR) {
      console.log("changed to BREAK_VAR: " + timer_or_break);
      timer_or_break = BREAK_VAR;
      timer_minutes = 0;
      break_minutes = $("#break-display").text();
      break_nIntervId = setInterval(reduceAsecond, 1000);
    }else {
      console.log("changed to TIMER_VAR: " + timer_or_break);
      timer_or_break = TIMER_VAR;
     }
  }
  if(timer_or_break === TIMER_VAR) {
    if(timer_minutes == 1) {
      timer_minutes = 0;
      timer_seconds = 59;
      if(timer_seconds < 10) {
        $("#timer-display").text(timer_minutes + ":0" + timer_seconds);
      }else {
         $("#timer-display").text(timer_minutes + ":" + timer_seconds);
      }
    }else {
       if(timer_seconds < 10) {
        $("#timer-display").text(timer_minutes + ":0" + timer_seconds);
      }else {
         $("#timer-display").text(timer_minutes + ":" + timer_seconds);
      }
    }
    if(timer_seconds == 0) {
      console.log("timer_seconds *****" + timer_seconds);
      timer_seconds = 59;
      timer_minutes--;
    }else
       timer_seconds--;
       console.log("timer_seconds = " + timer_seconds);
  }else {
     console.log("break has started");
     if(break_minutes < 0) {
       sound();
       stopTheTimer();
       if(timer_or_break === TIMER_VAR) {
         timer_or_break = BREAK_VAR;
       }else {
          timer_or_break = TIMER_VAR;
       }
      }
      if(break_minutes == 1) {
        break_minutes  = 0;
        break_seconds = 59;
        $("#break-display").text(break_minutes + ":" + break_seconds);
      }else if(break_minutes != -1) {
         $("#break-display").text(break_minutes + ":" + break_seconds);
      }
      if(break_seconds == 0) {
        console.log("break_seconds = " + break_seconds );
        break_seconds = 59;
        break_minutes--;
      }else
         break_seconds--;
   }
}

function stopTheTimer() {
  if(timer_or_break === TIMER_VAR) {
    clearInterval(timer_nIntervId);
    timer_nIntervId = false;
  }else {
     clearInterval(break_nIntervId);
     break_nIntervId = false;
  }
}

function pause() {
  console.log("pause clicked");
  console.log(timer_nIntervId);
  if(timer_nIntervId == false && break_nIntervId) {
    startPodomoroTimer();
  }else if(break_nIntervId == false && timer_nIntervId) {
     startPodomoroTimer();
  }
}

function reset() {
  if(timer_nIntervId === false || break_nIntervId === false) {
    clearInterval(timer_nIntervId);
    clearInterval(break_nIntervId);
    $("#timer-slider-horizontal").slider("enable");
    $("#break-slider-horizontal").slider("enable");
    $("#timer-slider-horizontal").slider("value", 60);
    $("#break-slider-horizontal").slider("value", 60);
    $("#timer-display").text($("#timer-slider-horizontal").slider("value"));
    $("#break-display").text($("#break-slider-horizontal").slider("value"));
    break_seconds = 0;
    timer_seconds = 0;
  }
}

function sound(){
  var audio = document.createElement("audio");
  audio.src = "https://goo.gl/HFQJKG";
  audio.play();
}
