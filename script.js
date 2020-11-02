var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("#main");
var nextButton = document.querySelector("#next");
var clearHighScore = document.querySelector("#clear-hgh");

var secondsLeft = 10

function setTime() {
    var timerInterval = setInterval(function() { 
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
            return
        }
        
    }, 1000);
    
}

setTime();