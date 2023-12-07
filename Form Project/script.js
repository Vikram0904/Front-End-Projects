let button=document.getElementById("btn1")
let data = document.getElementById("details")
let radioBtnList=document.querySelectorAll("input[type=radio]")
let gender = ''
radioBtnList.forEach(radio=>{
    radio.addEventListener("click",getRadioData)
})
function getRadioData(e){
    gender=e.target.value
}
let checkBtnList=document.querySelectorAll("input[type=checkbox]")
let language=""
let select=""
checkBtnList.forEach(check=>{
    check.addEventListener("click",getCheckData)
})
function getCheckData(e){
    language +=e.target.value+',';
}
function getSelectData(){
    select=document.getElementById("type").value
}

button.addEventListener("click", getData)
function getData(){
    let name1=document.getElementById("name1")
    let name2=document.getElementById("name2")
    let name=name1.value + name2.value
    data.innerHTML=`<h2>Student Details Are:</h2>Name:${name}<br>Gender:${gender}<br>Language:${language}<br>Class Type:${select}`
}