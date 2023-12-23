// Инпуты
let studentInput=document.querySelector("#type-select");
let nameInput=document.querySelector("#student-name");
let ageInput= document.querySelector("#student-age")

// Кнопка
let addBtn=document.querySelector(".add-student");
// Таблица
let studentListElement=document.querySelector(".student-item")

let studentArray=[]


addBtn.addEventListener("click",addStudent)


function addStudent(){
    let studentValue=studentInput.value
    let nameValue=nameInput.value
    let ageType=ageInput.value

    let studentString=`Класс: ${studentValue} Имя: ${nameValue} Возраст: ${ageType}`    
    studentArray.push(studentString)
    console.log(studentArray);
        let innerHtmlWidthStudent=""
    studentArray.forEach((elem)=>
        innerHtmlWidthStudent+= `<div>${elem}</div>`
    )
    studentListElement.innerHTML=innerHtmlWidthStudent
}