var colors = generateRandomColors(numSquares);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.querySelector(".easy");
var hardButton = document.querySelector(".hard")


resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  resetButton.textContent = "New Colors"
  h1.style.background = "steelblue"
})

easyButton.addEventListener("click", function(){
  hardButton.classList.remove("selected")
  easyButton.classList.add("selected")
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
     squares[i].style.background = colors[i];
    } else {
     squares[i].style.display = "none"
    }
  }
})

hardButton.addEventListener("click", function(){
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.background = colors[i]
    
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.background;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = pickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    // change each color to match give color
    squares[i].style.background = color;
  }
}

function pickColor(){
 var random = Math.floor(Math.random() * colors.length)
 return colors[random]
}


function generateRandomColors(num){
  // make an array
  var arr = []
  // add num random colors to arr
  for(var i = 0; i < num; i++){
      //get random color and push into array
      arr.push(randomColor());
  }
  // return that array
  return arr;
}


function randomColor(){
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}