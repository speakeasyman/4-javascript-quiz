function loadScores() {
        scoreTotal = JSON.parse(localStorage.getItem('highScores'));
        console.log(scoreTotal);

        for (let i = 0; i < scoreTotal.length; i++) {
            var spot = document.createElement("li");
            var text = document.createTextNode(scoreTotal[i].initials +'  '+ scoreTotal[i].score);
            spot.appendChild(text);
            document.getElementById('scores').appendChild(spot);
            
        }
};