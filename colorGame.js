var colors=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)"
]

// select all the squares
var squares= document.querySelectorAll(".square");
var pickedColor= colors[3];
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;

//Loop through the squares
for(var i=0; i <squares.length; i++){
    //Assign each sqaure one of the colors
    squares[i].style.backgroundColor = colors[i];
    //
    squares[i].addEventListener("click",function(){
        // Get the clicked color
        var clickedColor= this.style.backgroundColor;
        // Compare the clicked color to picked color
        if(clickedColor ===pickedColor){
            alert("Correct!");
        }
        else{
            alert("WRONG!");
        }
    });
}
