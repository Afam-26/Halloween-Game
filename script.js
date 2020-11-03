var questionCon = document.querySelector("question-container")
var timeEl = document.querySelector(".time");
var hideEl = document.querySelector(".hide");
var quizEl = document.querySelector("#quiz");
var quizBtnEl = document.querySelector("#quiz-btn");
var istruEl = document.querySelector("#instru");
var startBtn = document.querySelector("#start-btn");
var btnOne = document.querySelector("#btn-1")
var btnTwo = document.querySelector("#btn-2")
var btnThree = document.querySelector("#btn-3")
var btnFour = document.querySelector("#btn-4")
var currentPosition = 0;

var secondsLeft = 30;


// var nextButton = document.querySelector("#next");
// var clearHighScore = document.querySelector("#clear-hgh");
// var goBack = document.querySelector("#go-bk")
// var quiz1El = document.querySelector("#quiz-1")

var question = {

    {
        question: "Commonly used data types DO NOT include?",
        options:["strings", "booleans", "alerts", "numbers"],
        answer: "strings"

    },

    {
        question: "The condition in an if / else statement is enclosed within"
        Option: ["quotes", "curlybrackets", "parenthesis", "brackets"],
        answer: "curlybracket"
    }
}



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