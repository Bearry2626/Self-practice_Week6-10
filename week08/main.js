// 1. display all child nodes under <ul =id"appetizer>>
const ulelement = document.querySelector("#appetizer") // return first element ไม่ว่าจะอยู่ตรงไหนของ document
// const ulelement = document.getElementById("appetizer") // ถ้าไม่เจอจะ return null
console.log(ulelement.childNodes)

const meatele = document.querySelector(".meat") // return first element
console.log(meatele)
// ถ้าอยากได้ทั้งหมดใช้ querySelectorAll
const meateleAll = document.querySelectorAll(".meat") // return nodelist (array-like) data type
meateleAll.forEach((ele) => console.log(ele))
console.log(meateleAll)

// 2. find meat element that has twxt value contain "soup"
const meatsoup = document.querySelectorAll(".meat")
meatsoup.forEach((ele) => {
    if (ele.textContent.includes("Soup")) console.log(ele)
})
// ถ้าอยากให้เก็บค่าเพื่อไปใช้ต่อให้เก็บคา่ใน array
const arr = []
meatsoup.forEach((ele) => {
    if (ele.textContent.includes("Soup")) arr.push(ele)
})
console.log(arr)