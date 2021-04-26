var clearBtn = document.getElementById('clear');
var returnBtn = document.getElementById('return');



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

clearBtn.addEventListener('click', function() {
    localStorage.removeItem('highScores');
    location.reload();
    
});

returnBtn.addEventListener('click', function() {
   window.location.href = 'https://speakeasyman.github.io/4-javascript-quiz/';
})
