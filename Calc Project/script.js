
let value1 = document.getElementById("num1")
let value2 = document.getElementById("num2")

let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let button4 = document.getElementById("btn4")

button1.addEventListener("click",getAdd)
function getAdd(){
    let calculate = parseInt(value1.value) + parseInt(value2.value) ;
    document.getElementById("getData").innerHTML= "The Addition of Two Number is:"+calculate;
}

button2.addEventListener("click",getSub)
function getSub(){
    let calculate = parseInt(value1.value) - parseInt(value2.value) ;
    document.getElementById("getData").innerHTML= "The Subtraction of Two Number is:"+calculate;
}

button3.addEventListener("click",getDiv)
function getDiv(){
    let calculate = parseInt(value1.value) / parseInt(value2.value) ;
    document.getElementById("getData").innerHTML= "The Division of Two Number is:"+calculate;
}

button4.addEventListener("click",getMul)
function getMul(){
    let calculate = parseInt(value1.value) * parseInt(value2.value) ;
    document.getElementById("getData").innerHTML= "The Multiplication of Two Number is:"+calculate;
}