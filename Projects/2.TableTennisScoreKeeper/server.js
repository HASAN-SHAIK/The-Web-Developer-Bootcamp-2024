var p1Score = document.querySelector('#p1');
var p2Score = document.querySelector('#p2');
var totalScore = document.querySelector('select');
var p1Add = document.querySelector('#p1Point');
var p2Add = document.querySelector('#p2Point');
var reset = document.querySelector('#reset');
var total = totalScore.value;

totalScore.addEventListener('change', () => {
    resetScore();
})

p1Add.addEventListener('click', () => {
    if (total == 0) {
        alert("Game is completed Please reset to start new Game");
        return;
    }
    addScore(p1Score, p2Score)
});
p2Add.addEventListener('click', () => {
    if (total == 0) {
        alert("Game is completed Please reset to start new Game");
        return;
    }
    addScore(p2Score, p1Score);
})

var addScore = (player, player2) => {
    player.innerText = parseInt(player.innerText) + 1;
    total--;
    if (total == 0) {
        if (player.innerText == player2.innerText) {
            matchDone(player, player2, 1);
        }
        else
            (player.innerText > player2.innerText) ? matchDone(player, player2) : matchDone(player2, player);
    }
}

var matchDone = (player, player2, draw = 0) => {
    player.style.color = 'green';
    player2.style.color = 'red';
    if (draw == 1)
        player2.style.color = 'green';
    var h1 = document.createElement('h1');
    h1.style.color = 'green';
    var container = document.querySelector('.card');
    if (draw == 1)
        h1.innerText = "Draw Match";
    else
        h1.innerText = `Player ${player.classList[0]} Won`;
    h1.style.textAlign = "center";
    h1.classList = "winner";
    container.appendChild(h1);
}

reset.addEventListener('click', () => {
    resetScore();
})

var resetScore = () => {
    p1Score.innerText = "0";
    p2Score.innerText = "0";
    p1Score.style.color = "black";
    p2Score.style.color = "black";
    document.querySelector(".winner").remove()
    total = document.querySelector('select').value;
}
