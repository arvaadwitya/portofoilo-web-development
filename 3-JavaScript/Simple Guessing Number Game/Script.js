//The Secret Number
var SecretNumber = Math.floor(Math.random() * 10);

//Welcome the user


//Process of the guessing
var lives = 5; //if user answer wrong, then take 1 lives from user lives
var correct = false; //if user answer correct, then correct = true and the game over

var userGuess;


    document.getElementById("answer").onclick = function(){
        userGuess =  document.getElementById("number").value; //input number from user
        
        if (lives == 0){
            document.getElementById("result-text").innerHTML = "Game Over!";
            document.getElementById("result-text").style.color = "red";
            document.getElementById("result-text").style.fontSize = "80px";
            alert(SecretNumber);
        }

        else if(correct == true){
            document.getElementById("result-text").innerHTML = "Game Over! :)";
            document.getElementById("result-text").style.color = "green";
            document.getElementById("result-text").style.fontSize = "60px";
            document.getElementById("result-text").style.lineHeight = "50px";
        }

        else if (userGuess == SecretNumber){ //correct condition
            document.getElementById("result-text").innerHTML = "That's correct!";
            document.getElementById("result-text").style.color = "green";
            document.getElementById("result-text").style.fontSize = "60px";
            document.getElementById("result-text").style.lineHeight = "50px";
            correct = true;
        }
        else if (userGuess > SecretNumber){ //false condition
            lives -= 1;
            document.getElementById("result-text").innerHTML = "Too high!";
            document.getElementById("result-text").style.color = "red";
            document.getElementById("result-text").style.fontSize = "100px";
        
        }
        else { //false condition
            lives -= 1;
            document.getElementById("result-text").innerHTML = "Too low!";
            document.getElementById("result-text").style.color = "red";
            document.getElementById("result-text").style.fontSize = "100px";
        }
    }  










