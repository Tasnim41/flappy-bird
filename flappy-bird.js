var bird = document.getElementById("bird");
var hole = document.getElementById("hole");
var game = document.getElementById("game");

var result = document.getElementById("result");
var text = document.getElementById("text");
var score = 0;
var jumping = 0;

hole.addEventListener("animationiteration", ranHole);

function ranHole() {
    var random = -((Math.random() * 350) + 150);
    hole.style.top = random + "px";
    score++; // Increment the score when a new hole appears
}

var fall = setInterval(function() {
    
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    if (jumping == 0) {
        bird.style.top = (birdTop + 2) + "px";
    }

    var blockLeft = parseInt(window.getComputedStyle(document.getElementById("block")).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTop = 500 + holeTop;

    if ((birdTop > 450) || ((blockLeft < 50) && (birdTop < hTop || birdTop > hTop + 100))) {
        result.style.display = "block";
        text.innerText = `Your final score is: ${score}`;
        game.style.display = "none";
        score = 0;
        clearInterval(fall); // Stop the game loop when the game is over
    }
}, 10);

window.addEventListener("keydown", hop);

function hop() {
    if (jumping == 0) {
        jumping = 1;
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if (birdTop > 6) {
            bird.style.top = (birdTop - 60) + "px";
        }
        setTimeout(function() {
            jumping = 0;
        }, 100);
    }
}