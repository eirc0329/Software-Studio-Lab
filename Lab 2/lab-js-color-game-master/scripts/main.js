window.onload = function() {
    init();
};

var numCards = 3;
var gameOver = false;
var colors = [];
var pickedColor;
var body = document.querySelector("body");
var cards = document.querySelectorAll(".card");
var colorDisplay = document.getElementById("color-picked");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var resetDisplay = document.querySelector("#reset span");
var easy_mode = document.querySelector("#easy");
var hard_mode = document.querySelector("#hard");
var nightmare_mode = document.querySelector("#nightmare");
var mode = 0;
var count = document.querySelector("#count");
var time = 5;
var varid;

function init() {
    initCards();
    reset();
}

function initCards() {
    modeshift();
    for (var i = 0; i < cards.length; i++) {
        //add click listeners to cards
        cards[i].addEventListener("click", function() {
            if (gameOver)
                return;
            //grab color of clicked card
            var clickedColor = this.style.backgroundColor;
            // alert(this.style.backgroundColor);
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                count.style.opacity = 0;
                messageDisplay.textContent = "Correct!";
                resetDisplay.textContent = "Play Again"
                changeColors("#FFF");
                body.style.backgroundColor = clickedColor;
                gameOver = true;
            } else {
                this.style.opacity = 0;
                messageDisplay.textContent = "Try Again"
            }
        });
    }

}

function reset() {
    clearInterval(varid);
    gameOver = false;
    resetButton.style.opacity =1;
    mode_reset();
    count.style.opacity = 0;

    colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    messageDisplay.textContent = "What's the Color?";
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";
    time = 5;
    if(mode == 2){
        count_dowm();
    }
}

resetButton.addEventListener("click", function() {
    reset();
})

function changeColors(color) {
    //loop through all cards
    for (var i = 0; i < cards.length; i++) {
        //change each color to match given color
        cards[i].style.opacity = 1;
        cards[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function modeshift() {
    easy_mode.addEventListener("click", function() {
        mode = 0;
        reset();
        return;
    })
    hard_mode.addEventListener("click", function() {
        mode = 1;
        reset();
        return;
    })
    nightmare_mode.addEventListener("click", function() {
        mode = 2;
        reset();
        return;
    })
}

function mode_reset(){
    if(mode == 0)numCards = 3;
    else         numCards = 6;
    if(mode == 0){
        easy_mode.style.backgroundColor='steelblue';
        hard_mode.style.backgroundColor='white';
        nightmare_mode.style.backgroundColor='white';
    }else if(mode == 1){
        easy_mode.style.backgroundColor='white';
        hard_mode.style.backgroundColor='steelblue';
        nightmare_mode.style.backgroundColor='white';
    }else{
        easy_mode.style.backgroundColor='white';
        hard_mode.style.backgroundColor='white';
        nightmare_mode.style.backgroundColor='steelblue';
        resetButton.style.opacity =0;
    }
}
function count_dowm(){
    count.style.opacity = 1;
    clearInterval(varid);
    time = 6;
    varid = setInterval(tick, 1000);
}
function tick() {
    if(time == 0 ){
        if(messageDisplay.textContent !="Correct!")
            messageDisplay.textContent = "timeout!";
        count.style.opacity = 0;
        resetDisplay.textContent = "Play Again"
        changeColors("#FFF");
        body.style.backgroundColor = pickedColor;
        gameOver = true;
        return;
    }
    time = time - 1;
    count.textContent = time;
}