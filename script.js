var questionCon = document.querySelector("#question-container");
var timeEl = document.querySelector("#time");
var ShowEl = document.querySelector("#show")
var istruEl = document.querySelector("#instru");
var startBtnEl = document.querySelector("#start-btn");
var quizEl = document.querySelector("#quiz");
var hideEl = document.querySelector(".hide");
var quizFirstEl = document.querySelector("#quizFirst");
var btnOneEl = document.querySelector("#btn-1");
var btnTwoEl = document.querySelector("#btn-2");
var btnThreeEl = document.querySelector("#btn-3");
var btnFourEl = document.querySelector("#btn-4");
var hideConEl = document.querySelector("#hideCon");
var highScoreEl = document.querySelector("#highScore");
var submitBtn = document.querySelector("#submit-btn")

var currentPosition = 0;
var secondsLeft = 60;
var display;




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



document.getElementById("quiz").style.display = "none";
document.getElementById("hideCon").style.display = "none";
document.getElementById("highScore").style.display = "none";

// Quiz starting function
startBtnEl.addEventListener("click",startQuiz);



function startQuiz() {
    document.getElementById("instru").style.display = "none";
    document.getElementById("quiz").style.display = ""
   
     var timerInterval = setInterval(function() { 
        timeEl.textContent=secondsLeft;
        secondsLeft--;
     
        if(secondsLeft < 0) {
           
            clearInterval(timerInterval);
            timeEl.textContent = "Game over";
            
        }
        
    }, 1000);

}

// Section for grabbing questions

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
        alert("correct!")
        nextQuestion();
    }
    else{
        secondsLeft = secondsLeft - 10;
        alert("Incorrect!")
        nextQuestion();
    }

        
}


// Section for grabbing second question

function nextQuestion() {
    currentPosition++;

    if(questions[currentPosition]!== undefined){
        quizFirstEl.textContent = questions[currentPosition].question;
        btnOneEl.innerHTML = questions[currentPosition].options[0];
        btnTwoEl.innerHTML = questions[currentPosition].options[1];
        btnThreeEl.innerHTML = questions[currentPosition].options[2];
        btnFourEl.innerHTML = questions[currentPosition].options[3];
        
    }else{
        document.getElementById("hideCon").style.display = "block";

        quizEl.style.display = "none"
    }


    
}


// Highscores storage section

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var initials = document.querySelector("#userInitials").value;
    window.localStorage.setItem("scores", JSON.stringify({"userInitials": initials, "timerScore": secondsLeft}));
    displayScores();
    
});


ShowEl.addEventListener("click", displayScores);
function displayScores(){
    document.getElementById("hideCon").style.display = "none"
    document.getElementById("highScore").style.display = "block";
    Object.keys(localStorage).forEach(function (key) {
        console.log(localStorage.getItem(key));
        var li = document.createElement("li");
       li.textContent = key + "-" + localStorage.getItem(key);
        document.querySelector("#scores").appendChild(li);
    });

    
}

// End Game function

function quizEnd() {
    
    clearInterval(timerInterval);
    console.log("Game Over");
    var finalScore = document.getElementById("#highScore");
    finalScore.textContent = time 

   quizEnd()
    
}


    
