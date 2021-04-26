// These are my variables pulled from the DOM
var clearBtn = document.getElementById('clear');
var returnBtn = document.getElementById('return');
//This will load the scores. The initial if, just prevents an error from appearing 
// in the console if there is a null value.
function loadScores() {
        scoreTotal = JSON.parse(localStorage.getItem('highScores'));
        console.log(scoreTotal);
        if (scoreTotal === null){
        } else {
            for (let i = 0; i < scoreTotal.length; i++) {
            var spot = document.createElement("li");
            var text = document.createTextNode(scoreTotal[i].initials +'  '+ scoreTotal[i].score);
            spot.appendChild(text);
            document.getElementById('scores').appendChild(spot);            
        }}
};
//This just clears the score by removing the item and reloads the page. I debated on whether or not
// to have it take you back to the quiZ. But for grading, the person may
// want to see if the reload.
clearBtn.addEventListener('click', function() {
    localStorage.removeItem('highScores');
    location.reload();    
});
//This just takes you back to the quiz.
returnBtn.addEventListener('click', function() {
   window.location.href = 'https://speakeasyman.github.io/4-javascript-quiz/';
})
