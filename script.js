var questionCon = document.querySelector("#question-container");
var timeEl = document.querySelector(".time");
var hideEl = document.querySelector(".hide");
var quizEl = document.querySelector("#quiz");
var quizBtnEl = document.querySelector("#quiz-btn");
var istruEl = document.querySelector("#instru");
var startBtnEl = document.querySelector("#start-btn");
var btnOneEl = document.querySelector("#btn-1");
var btnTwoEL = document.querySelector("#btn-2");
var btnThreeEL = document.querySelector("#btn-3");
var btnFourEl = document.querySelector("#btn-4");
var currentPosition = 0;

var secondsLeft = 30;

// Question section in array
var questions = [

    {
        question: "Commonly used data types DO NOT include?",
        options: ["strings", "booleans", "alerts", "numbers"],
        ans: "strings",

    },

    {
        question: "The condition in an if / else statement is enclosed within",
        options: ["quotes", "curlybrackets", "parenthesis", "brackets"],
        ans: "curlybracket",
    }
];

// Quiz starting function

startBtnEl.addEventListener("click",startQuiz)

function startQuiz() {
    document.getElementById("instru").style.display = "none"

    var timerInterval = setInterval(function() { 
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft < 0) {
            timeEl.textContent = "Game over"
            clearInterval(timerInterval)
            timeEl.textContent = ""
            
        }
        
    }, 3000);

    quizEl.textContent = questions[0].question;
    btnOneEl.innerHTML = questions[0].options[0]
    btnTwoEl.innerHTML = questions[0].options[1]
    btnThreeEl.innerHTML = questions[0].options[2]
    btnFourEl.innerHTML = questions[0].options[3]
           
}

// section for checking answers

btnOneEl.addEventListener("click", checkAns);
btnTwoEl.addEventListener("click", checkAns);
btnThreeEl.addEventListener("click", checkAns);
btnFourEl.addEventListener("click", checkAns);

function checkAns(event) {
    if(event.target.innerHTML == questions[currentPosition].ans)
    {
        nextQuestion();
    }
    else{
        timeEl = timeEl -10;
        nextQuestion();
    }
    
}


// Section for second question

function nextQuestion() {
    currentPosition++;

    btnOneEl.textContent = questions[currentPosition].question;
    btnTwoEL.innerHTML = questions[currentPosition].options[0]
    btnThreeEL.innerHTML = questions[currentPosition].options[1]
    btnTwoEL.innerHTML = questions[currentPosition].options[2]
    btnFourEL.innerHTML = questions[currentPosition].options[3]
    
}



