var startBtn = document.getElementById('startBtn');
var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');
var btnThree = document.getElementById('btnThree');
var btnFour = document.getElementById('btnFour');



var questionBank = [{
    questionIs: 'Commonly used data types DO NOT include:',
    ansOne: '1. strings',
    ansTwo: '2. booleans',
    ansThree: '3. alerts',
    ansFour: '4. numbers',
    correctAns: '3',
}, {
    questionIs: 'The condition in an if / else statement is enclosed wtihin ________.',
    ansOne: '1. quotes',
    ansTwo: '2. curly brackets',
    ansThree: '3. parantheses',
    ansFour: '4. square brackets',
    correctAns: '3',
}, {
    questionIs: 'Arrays in JavaScript can be used to store __.',
    ansOne: '1. numbers and strings',
    ansTwo: '2. other arrays',
    ansThree: '3. booleans',
    ansFour: '4. all of the above',
    correctAns: '4',
}, {
    questionIs: 'String values must be enclosed wtihin ____ when being assigned to variables.',
    ansOne: '1. commas',
    ansTwo: '2. curly brackets',
    ansThree: '3. quotes',
    ansFour: '4. parentheses',
    correctAns: '3',
}, {
    questionIs: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    ansOne: '1. JavaScript',
    ansTwo: '2. terminal / bash',
    ansThree: '3. for loops',
    ansFour: '4. console log',
    correctAns: '4',
}]

startBtn.addEventListener('click', function() {
    showbutton();
})

function showbutton() {
    startBtn.style.display = 'none';
    btnOne.style.display = 'flex';
    btnTwo.style.display = 'flex';
    btnThree.style.display = 'flex';
    btnFour.style.display = 'flex';
}

function questionBank() {
    
}
