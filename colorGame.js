var numSquares = 6;
var mode="hard";
var colors=generateRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= colors[Math.floor(Math.random() * numSquares)];
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var message= document.getElementById("displayMessage");
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click",function(){
    if(mode === "hard"){
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        numSquares=3;
        mode = "easy";
        newGame();
    }
})

hardBtn.addEventListener("click",function(){
    if(mode === "easy"){
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        numSquares =6;
        mode = "hard";
        newGame();
    }
})

//Initialze reset button
resetButton.addEventListener("click",function(){
    newGame();
});

//Loop through the squares adn assign them colors
for(var i=0; i <squares.length; i++){
    //Assign each sqaure one of the colors
    squares[i].style.backgroundColor = colors[i];
    //Add event listener
    squares[i].addEventListener("click",function(){
        // Get the clicked color
        var clickedColor= this.style.backgroundColor;
        // Compare the clicked color to picked color
        if(clickedColor ===pickedColor){
            message.textContent= "Correct";
            colorChange(squares,clickedColor);
            resetButton.textContent= "Plav Again?";
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent= "Try Again";
        }
    });
}

function colorChange(squares,selectedColor){
    for(var i=0; i<numSquares;i++){
        squares[i].style.backgroundColor= selectedColor;
    }
}

function generateRandomColors(num){
    // make an array
    var arr=[];
    // generate random color and add in array
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor(){
    var redColor= Math.floor(Math.random() * 256);
    var greenColor= Math.floor(Math.random() * 256);
    var blueColor= Math.floor(Math.random() * 256);
    return ("rgb("+ redColor +", " +greenColor + ", "+ blueColor +")");
}

function newGame(){
    if (mode==="hard"){
        // Change colors
        colors=generateRandomColors(6)
        //Pick new color
        pickedColor= colors[Math.floor(Math.random() * 6)];
        colorDisplay.textContent=pickedColor;
        for(var i=0; i <squares.length; i++){
            //Assign each sqaure one of the colors
            squares[i].style.backgroundColor = colors[i];
        }

    }
    if (mode === "easy"){
        colors=generateRandomColors(3)
        //Pick new color
        pickedColor= colors[Math.floor(Math.random() * 3)];
        colorDisplay.textContent=pickedColor;
        for(var i=0; i <squares.length; i++){
            if (colors[i]){
                squares[i].style.backgroundColor = colors[i];
            }
            else{
                squares[i].style.backgroundColor = "#232323"
            }
        } 
    }
    resetButton.textContent= "New Colors"
    h1.style.backgroundColor="steelblue"
    message.textContent=""  
}