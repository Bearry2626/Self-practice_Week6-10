// const submit = document.querySelector("div > button");
// console.log(submit);
// // // 1. add event with annonymous handle function
// submit.addEventListener("click", (event) => {
//     console.log(event.target.id) // event.target -> button element จะไปเรียกอะไต่อกับทำไ้ดเหมด
//     console.log(event.target.nodeName) // 
//      console.log(event.target.nodeType) // 
//     console.log(event.target.nodeValue) // 
//     console.log(event.target.parentElement)
//      console.log(event.target.value) // 
//     console.log(event.currentTarget) // 
//     console.log(event.eventPhase)
//     console.log('clicked');
// })

// // 2. add event wth named fucction
// const submitNameFunc = () => {
//     console.log("youer clicked");
// }

// submit.addEventListener("click", submitNameFunc);
// submit.removeEventListener("click", submitNameFunc);


// const divElement = document.querySelector("div")
// divElement.addEventListener("click", () => {
//     console.log('div');
// }, true)

// const bodyElement = document.querySelector("body")
// bodyElement.addEventListener("click", () => {
//     console.log(event.target) // 
//     console.log(event.currentTarget) // 
//     console.log('body');
// }, true)

// ในกรณีนี้event สะเทือนไปทั้งหมด และขึ้นมาพร้อมกันเพราะ -> จาก event ที่เราตั้ง 
// ตามตัวอย่าง จุดเกิดเหตุมันอยู่ด้านใน body div เติม true เขาไป ทำให่เป็น capturing 
// ลำดับจะไลาตาม descendant จากจุดเกิดเหตุไล่ไป

// เวลาเกิดการคลิก broser จะโยน event object ให้ตัวนึง
// ถ้าจะรับ object ให้ใส่ตัวแปรตัวนึงตรง parameter(event/e) ที่ handel function
// มี propoties / function ให้ใช้เยอะมาก

// event.eventPhase จะคืนค่าเป็นเลข ตามflow ที่มันไหล


// ถ้าเขียนแบบนี้เขียนเยอะมาก สามารถย่อลงมาได้
// ทำให้สามารถแชร์ function ได้ทุกElement common propoties ร่วม
// const submitButton = document.querySelector("button")
// const displayMessage = (event) => {
//     console.log("Hay")
// }
// submitButton.addEventListener("click", displayMessage)

// const divElement = document.querySelector("div")
// divElement.addEventListener("click div", displayMessage) 

// const bodyElement = document.body
// bodyElement.addEventListener("click body", displayMessage) 

// ของต้น
const bolt = document.querySelector('img')
const submitbutton = document.querySelector("div>button")
const divElement = document.querySelector("div")
const bodyElement = document.querySelector("body")
 
function logEvent(event, message) {
    // console.log('target:', event.target)
    // console.log('currentTarget:', event.currentTarget)
    // console.log('eventPhase:', event.eventPhase)
    if (message) console.log(message)
}
 
if (submitbutton) {
    submitbutton.addEventListener('click', (event) => {
        logEvent(event, "Submit button was clicked!")
    })
}
 
if (divElement) {
    divElement.addEventListener('click', (event) => {
        logEvent(event, "Div was clicked!!")
    })
}
 
if (bodyElement) {
    bodyElement.addEventListener('click', (event) => {
        logEvent(event, "body was clicked!!")
    })
}

// code ที่ต้นทำมามันเป็น เทคนิคการ forword event
// เรียนขึ้นมา จะโยนไปให้ hander function
// ปกติ browser จะโยน event มาที่ hander function จุดเดียว = เราต้องforword ไปเอง
// พอได้ forword จะได้ attach the event informationไปต่อที่ funvtion ที่สอง

// curent target กับ target ไม่จำเป้ฯต้องเป็น node เดียวกัน และมีโอกาสเป็นnode เดียวกัน มันจะ “เป็น node เดียวกัน” เฉพาะตอนที่อีเวนต์นั้นเกิดขึ้นที่ตัว element นั้นโดยตรง

