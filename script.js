var questionCon = document.querySelector("#question-container");
var timeEl = document.querySelector(".time");
var istruEl = document.querySelector("#instru");
var startBtnEl = document.querySelector("#start-btn");
var quizEl = document.querySelector("#quiz");
var quizFirstEl = document.querySelector("#quizFirst");
var btnOneEl = document.querySelector("#btn-1");
var btnTwoEl = document.querySelector("#btn-2");
var btnThreeEl = document.querySelector("#btn-3");
var btnFourEl = document.querySelector("#btn-4");

var currentPosition = 0;

var secondsLeft = 60;

// Question and answers section in array
var questions = [

    {
        question: "Commonly used data types DO NOT include?",
        options: ["strings", "booleans", "alerts", "numbers"],
        ans: "strings"

    },

    {
        question: "The condition in an if / else statement is enclosed within",
        options: ["quotes", "curlybrackets", "parenthesis", "brackets"],
        ans: "curlybracket"
    },

    {
        question: "Arrays in JavaScript can be used to store",
        options: ["numbers and string", "other array", "boolean", "all of the above"],
        ans: "all of the above"
    },

    {
        question: "String values must be enclosed within ------ when being assigned to variable",
        options: ["Commas", "curybracket", "quotes", "parenthesis"],
        ans: "parenthesis",
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugging is:",
        options: ["JavaScript", "terminal/bash", "loops", "console.log"],
        ans: "console.log"
    },
];

// Quiz starting function

startBtnEl.addEventListener("click",startQuiz)

function startQuiz() {
    document.getElementById("instru").style.display = "none"
     var timerInterval = setInterval(function() { 
        timeEl.textContent=secondsLeft;
        secondsLeft--;
     
        if(secondsLeft < 0) {
           
            clearInterval(timerInterval);
            timeEl.textContent = "Game over";
            
        }
        
    }, 1000);

}

// Section for grabbing first question

quizFirstEl.textContent = questions[0].question;
btnOneEl.innerHTML = questions[0].options[0];
btnTwoEl.innerHTML = questions[0].options[1];
btnThreeEl.innerHTML = questions[0].options[2];
btnFourEl.innerHTML = questions[0].options[3];
           


// section for checking answers

btnOneEl.addEventListener("click", checkAns);
btnTwoEl.addEventListener("click", checkAns);
btnThreeEl.addEventListener("click", checkAns);
btnFourEl.addEventListener("click", checkAns);

function checkAns(event) {
    if(event.target.innerHTML === questions[currentPosition].ans)
    {
        nextQuestion();
    }
    else{
        secondsLeft = secondsLeft - 10;
        nextQuestion();
    }
    
}


// Section for grabbing second question

function nextQuestion() {
    currentPosition++;

    quizFirstEl.textContent = questions[currentPosition].question;
    btnOneEl.innerHTML = questions[currentPosition].options[0];
    btnTwoEl.innerHTML = questions[currentPosition].options[1];
    btnThreeEl.innerHTML = questions[currentPosition].options[2];
    btnFourEl.innerHTML = questions[currentPosition].options[3];
    
}



