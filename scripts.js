// Setting up the initial variables
const myColor1 = document.getElementById("picker-1")
const myColor2 = document.getElementById("picker-2")
const myColor3 = document.getElementById("picker-3")
const formGradient = document.getElementById("gradient")
const split = document.getElementById("split")
const btn_surprise = document.getElementById("surprise")
const btn_width = document.getElementById("Width")


let inputValue = 50


// Adding Event listeners for the Gradient
myColor1.addEventListener("input", gradientChange)
myColor2.addEventListener("input", gradientChange)
myColor3.addEventListener("input", gradientChange)
split.addEventListener("input", generateNumber)
formGradient.addEventListener("input", gradientChange)
btn_surprise.addEventListener("click", generateRandomColors)



// Sweet functions
function gradientChange(){
    formGradient.style.background  = `linear-gradient(0.25turn, ${myColor1.value}, ${myColor3.value} ${generateNumber()}%, ${myColor2.value})`

}

function generateNumber(){
    number = split.value
    return number
}

function generateRandomColors(){
    r1 = Math.floor(Math.random() * 255) + 1
    r2 = Math.floor(Math.random() * 255) + 1
    r3 = Math.floor(Math.random() * 255) + 1
    formGradient.style.background  = `linear-gradient(0.25turn, rgb(${r1},${r2},${r3}), #ffffff ${generateNumber()}%, rgb(${r1},${r2},${r3}))`
    
    // convers RGB to hex. 
    // set both inputs to the new value
}



