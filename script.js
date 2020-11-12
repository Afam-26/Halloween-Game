let questionCon = document.querySelector("#question-container");
let timeEl = document.querySelector("#time");
let ShowEl = document.querySelector("#show")
let istruEl = document.querySelector("#instru");
let startBtnEl = document.querySelector("#start-btn");
let quizEl = document.querySelector("#quiz");
let hideEl = document.querySelector(".hide");
let quizFirstEl = document.querySelector("#quizFirst");
let btnOneEl = document.querySelector("#btn-1");
let btnTwoEl = document.querySelector("#btn-2");
let btnThreeEl = document.querySelector("#btn-3");
let btnFourEl = document.querySelector("#btn-4");
let hideConEl = document.querySelector("#hideCon");
let highScoreEl = document.querySelector("#highScore");
let clearHighEl = document.querySelector("#clear-high")
let submitBtn = document.querySelector("#submit-btn")

let currentPosition = 0;
let secondsLeft = 60;


// Question and answers section in array
let questions = [

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
        question: "String values must be enclosed within ------ when being assigned to letiable",
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
    document.getElementById("quiz").style.display = "flex"
   
     let timerInterval = setInterval(function() { 
        timeEl.textContent = secondsLeft;
        secondsLeft--;
     
        if(secondsLeft = 0) {
           
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
    let initials = document.querySelector("#userInitials").value;
    window.localStorage.setItem("scores", JSON.stringify({"userInitials": initials, "timerScore": secondsLeft}));
    displayScores();
    
});

ShowEl.addEventListener("click", displayScores);
function displayScores(){
    document.getElementById("hideCon").style.display = "none"
    document.getElementById("highScore").style.display = "block";
    Object.keys(localStorage).forEach(function (key) {
        console.log(localStorage.getItem(key));
        let li = document.createElement("li");
       li.textContent = key + "-" + localStorage.getItem(key);
        document.querySelector("#scores").appendChild(li);
    });

    
}


// End Game function

function quizEnd() {
    
    clearInterval(timerInterval);
    console.log("Game Over");
    let finalScore = document.getElementById("#highScore");
    finalScore.textContent = time 

   quizEnd()
    
}


// Section for "Go Back" button

function goBack(){
    document.getElementById("quiz").style.display = "flex"
    document.getElementById("highScore").style.display = "none"
    secondsLeft = 60
    currentPosition = 0

}

clearHighEl.addEventListener("click", clearScore);
function clearScore(){
    document.getElementById("scores").innerHTML = "";
}

    
