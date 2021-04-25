var startBtn = document.getElementById('startBtn');
var questionText = document.getElementById('textBox');
var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');
var btnThree = document.getElementById('btnThree');
var btnFour = document.getElementById('btnFour');
var btnFive = document.getElementById('btnFive');
var btnAns = document.getElementsByClassName('questionBtn');
var timeCounter = document.getElementById('timeCounter');
var timerLeft = 75;
var theAnswer = '';
var questionNumber = 0;
var result = document.getElementById('result');



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

startBtn.addEventListener('click', function() {
    showbutton();
    questionMake();
    setInterval(timer, 1000);
})

for (let i = 0; i < btnAns.length; i++) {
    btnAns[i].addEventListener('click', function(){
        selection = 
        questionCheck();
    });
}
 
    
btnAns
function showbutton() {
    startBtn.style.display = 'none';
    btnOne.style.display = 'flex';
    btnTwo.style.display = 'flex';
    btnThree.style.display = 'flex';
    btnFour.style.display = 'flex';
    btnFive.style.display = 'none';

}

function questionMake() {
    if (questionNumber < 5) {
        questionText.textContent = questionBank[questionNumber].questionIs;
        btnOne.textContent = questionBank[questionNumber].ansOne;
        btnTwo.textContent = questionBank[questionNumber].ansTwo;
        btnThree.textContent = questionBank[questionNumber].ansThree;
        btnFour.textContent = questionBank[questionNumber].ansFour;
        btnFive.textContent = questionBank[questionNumber].ansFive;
    }
     }

function questionCheck() {
    
    if (questionBank[questionNumber].correctAns == answer) {
        console.log('first half' + btnFive.value);
        console.log('second half ' + answer);
        result.textContent = 'Correct, :)'
    } else {
        console.log(`WRONG`);
        console.log('first half' + questionBank[questionNumber].correctAns);
        result.textContent = "Wrong, :(";
        penalty();
    }   
    
    questionNumber++;
    
    
    
    questionMake();
    
}


function choice(clicked) {
       answer = clicked
    console.log(clicked);
}

function timer() {
    timerLeft--;
    timeCounter.textContent = timerLeft;
}

function penalty() {
    timerLeft = timerLeft - 10;
}