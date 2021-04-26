//Here are my variables grabbed from the DOM

var startBtn = document.getElementById('startBtn');
var questionText = document.getElementById('textBox');
var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');
var btnThree = document.getElementById('btnThree');
var btnFour = document.getElementById('btnFour');
var btnAns = document.getElementsByClassName('questionBtn');
var timeCounter = document.getElementById('timeCounter');
var timerLeft = 75;
var questionNumber = 0;
var result = document.getElementById('result');
var endScore = document.getElementById('endScore');
var quizBox = document.getElementById('quizBox');
var endGame = document.getElementById('endGame');
var timeDisplay = document.getElementById('timer');
var btnSubmit = document.getElementById('submit');
var initialsEnt = document.getElementById('initialsEnt');


// The object with the questions from the homework assignment
var questionBank = [{
    questionIs: 'Commonly used data types DO NOT include:',
    ansOne: '1. strings',
    ansTwo: '2. booleans',
    ansThree: '3. alerts',
    ansFour: '4. numbers',
    correctAns: 'btnThree',
}, {
    questionIs: 'The condition in an if / else statement is enclosed wtihin ________.',
    ansOne: '1. quotes',
    ansTwo: '2. curly brackets',
    ansThree: '3. parantheses',
    ansFour: '4. square brackets',
    correctAns: 'btnThree',
}, {
    questionIs: 'Arrays in JavaScript can be used to store __.',
    ansOne: '1. numbers and strings',
    ansTwo: '2. other arrays',
    ansThree: '3. booleans',
    ansFour: '4. all of the above',
    correctAns: 'btnFour',
}, {
    questionIs: 'String values must be enclosed wtihin ____ when being assigned to variables.',
    ansOne: '1. commas',
    ansTwo: '2. curly brackets',
    ansThree: '3. quotes',
    ansFour: '4. parentheses',
    correctAns: 'btnThree',
}, {
    questionIs: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    ansOne: '1. JavaScript',
    ansTwo: '2. terminal / bash',
    ansThree: '3. for loops',
    ansFour: '4. console log',
    correctAns: 'btnFour',
}]
//Event listener for when the start button gets clicked. Will show the questions, and start the timer. 
startBtn.addEventListener('click', function() {
    showbutton();
    questionMake();
    countDown = setInterval(timer, 1000);
})
// This will cycle thorugh the object when they click on an aswer. It'll check the answer with questionCheck function
for (let i = 0; i < btnAns.length; i++) {
    btnAns[i].addEventListener('click', function(){
        selection = 
        questionCheck();
    });
}
//The event listener for the submit function. This guy does a lot. It'll either start up the local storage, or add to it with the new info. It'll also sort it high to low before storing 
//information as a string. Lastly, it'll take you to the highscores page.
btnSubmit.addEventListener('click', function(){
    var input = document.getElementById('initialsEnt').value;
    var history = JSON.parse(localStorage.getItem('highScores'));
    if (history === null) {
        scoreSave = [{
            initials: input,
            score: timerLeft,
        }]        
    } else if (input === "") {
        input = input.concat("Anonymous");
        scoreSave = history.concat([{
            initials: input,
            score: timerLeft,
        }])
    } else {
        scoreSave = history.concat([{
            initials: input,
            score: timerLeft,
        }])
    }
    scoreSave.sort(function(a,b){
        var x = a.score;
        var y = b.score;
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
    });
    localStorage.setItem('highScores', JSON.stringify(scoreSave));
    window.location.href = 'https://speakeasyman.github.io/4-javascript-quiz/assets/index2.html';    
})    
//All this does and change what's initally displayed to none, and brings out the buttons and questions in flexbox
function showbutton() {
    startBtn.style.display = 'none';
    btnOne.style.display = 'flex';
    btnTwo.style.display = 'flex';
    btnThree.style.display = 'flex';
    btnFour.style.display = 'flex';
    btnFive.style.display = 'none';
}
// This function just creates the questions, by updating the buttons with the information from the object. It's only an if statement, because checkTime 
// function will change it to the final set on this page.
function questionMake() {
    if (questionNumber < 5) {
        questionText.textContent = questionBank[questionNumber].questionIs;
        btnOne.textContent = questionBank[questionNumber].ansOne;
        btnTwo.textContent = questionBank[questionNumber].ansTwo;
        btnThree.textContent = questionBank[questionNumber].ansThree;
        btnFour.textContent = questionBank[questionNumber].ansFour;
        }
     }
// This will check to see if the answer is correct. If wrong, it'll invoke the penalty, it'll then increment the questionNumber variable, and repeat the check and questionMake
function questionCheck() {    
    if (questionBank[questionNumber].correctAns == answer) {
        result.textContent = 'Correct, :)'
    } else {
        result.textContent = "Wrong, :(";
        penalty();
    } 
    questionNumber++;
    checkTime();    
    questionMake();    
}
// This pulls the id the button that was clicked to answer a question. That id is compared to the correctAns in questionBank.
function choice(clicked) {
       answer = clicked
}
//This updates the counter on the page, and has a checkTime to see if time goes out.
function timer() {
    timerLeft--;
    timeCounter.textContent = timerLeft;
    checkTime();
}
// This subtracts 10 seconds when the penalty is applied
function penalty() {
    timerLeft = timerLeft - 10;
}
//This just checks the time and the question number. If either have come to and end, you proceed to All Done/Score page
function checkTime() {
    if (questionNumber >= 5) {
        quizBox.style.display = 'none';
        endGame.style.display = "flex";
        timeDisplay.style.display = 'none';
        endScore.textContent = timerLeft;
        clearInterval(countDown); 
        return      
        

    } if (timerLeft <= 0) {
        quizBox.style.display = 'none';
        endGame.style.display = "flex";
        timeDisplay.style.display = 'none';
        endScore.textContent = timerLeft;
        clearInterval(countDown);
        return
    }     
}


