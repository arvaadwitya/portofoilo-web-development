var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

console.log(squares);

var tryAgain = document.querySelector("#tryAgain");

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var isEasy = false;
var isHard = false;

colorDisplay.textContent = pickedColor;

easy.addEventListener("mouseover", function(){
    easy.style.backgroundColor = "rgb(36, 103, 228)";
});

easy.addEventListener("mouseout", function(){
    if (!isEasy){
        easy.style.backgroundColor = "white";
    }
});

hard.addEventListener("mouseover", function(){
    hard.style.backgroundColor = "rgb(36, 103, 228)";
});

hard.addEventListener("mouseout", function(){
    if (!isHard){
        hard.style.backgroundColor = "white";
    }
});

tryAgain.addEventListener("mouseover", function(){
    tryAgain.style.backgroundColor = "rgb(36, 103, 228)";
});

tryAgain.addEventListener("mouseout", function(){
    tryAgain.style.backgroundColor = "white";
});

function easyMode(){
    easy.style.backgroundColor = "rgb(36, 103, 228)";
    hard.style.backgroundColor = "white";
    colors = generateRandomColors(3);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    for (var i = 3; i < squares.length; i++){
        squares[i].style.backgroundColor = "#232323";
    }
    for (var i = 0; i < 3; i++){
        console.log(squares[i]);
        squares[i].style.backgroundColor = colors[i];
    
        squares[i].addEventListener("click", function(){
          var clickedColor = this.style.backgroundColor;
          if (clickedColor === pickedColor){
              messageDisplay.textContent = "Correct!";
              messageDisplay.style.color = "green";
              document.querySelector("#header").style.backgroundColor = clickedColor;
              for (var i = 0; i < 3; i++){
                squares[i].style.backgroundColor = clickedColor;
              }
              for (var i = 3; i < squares.length; i++){
                squares[i].style.backgroundColor = "#232323";
              }
              tryAgain.textContent = "Try Again?";
          } else {
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try Again!";
              messageDisplay.style.color = "red";
          }
        });
    }
}

function hardMode(){
    easy.style.backgroundColor = "white";
    hard.style.backgroundColor = "rgb(36, 103, 228)";
    colors = generateRandomColors(6);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    
    for (var i = 0; i < squares.length; i++){
        console.log(squares[i]);
    
        squares[i].style.backgroundColor = colors[i];
    
        squares[i].addEventListener("click", function(){
          var clickedColor = this.style.backgroundColor;
          if (clickedColor === pickedColor){
              messageDisplay.textContent = "Correct!";
              messageDisplay.style.color = "green";
              document.querySelector("#header").style.backgroundColor = clickedColor;
              for (var i = 0; i < squares.length; i++){
                squares[i].style.backgroundColor = clickedColor;
              }      
              tryAgain.textContent = "Try Again?";
          } else {
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try Again!";
              messageDisplay.style.color = "red";
          }
        });
    }
}

easy.addEventListener("click", function(){
    messageDisplay.textContent = "";
    header.style.backgroundColor = "rgb(36, 103, 228)";
    tryAgain.textContent = "New Colors";
    isEasy = true;
    isHard = false;
    easyMode();
});

hard.addEventListener("click", function(){
    messageDisplay.textContent = "";
    header.style.backgroundColor = "rgb(36, 103, 228)";
    tryAgain.textContent = "New Colors";
    isEasy = false;
    isHard = true;
    hardMode();
});


function pickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(number){
    var arr = [];
    
    for (var i = 0; i < number; i++){
        arr.push(randomColor());
    }
    
    return arr;
}

function randomColor(){
   var red = Math.floor(Math.random() * 256);
   var green = Math.floor(Math.random() * 256);
   var blue = Math.floor(Math.random() * 256);
   return "rgb(" + red + ", " + green + ", " + blue + ")";
}

tryAgain.addEventListener("click", function(){
    messageDisplay.textContent = "";
    header.style.backgroundColor = "rgb(36, 103, 228)";
    tryAgain.textContent = "New Colors";
    if (isEasy){
       easyMode();
    }
    else if (isHard){
       hardMode();
    }
});