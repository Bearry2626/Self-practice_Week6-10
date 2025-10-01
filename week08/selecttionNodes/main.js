// // 1. getElementByName() returns a NodeList data type
// const fnameElement = document.getElementsByName("fname");
// console.log(fnameElement.length);
// fnameElement.forEach((ele) => console.log(ele))
// fnameElement.children // undefined มันใช้ไม่ได้กับ NodeList
// fnameElement[0].children // ใช้ได้
// // console.log(nameAttrCollection);


// // 2. getElementsByTagName(), returns a HTMLCollection data type
// const inputElements = document.getElementsByTagName("input");
// Array.from(inputElements).forEach((ele) => console.log(ele)) // forEach() ไม่ได้ใช้กับ HTMLCollection จ้องเพิ่ม array.from() ก่อน  (convert to array first)
// // 3. gittElementsByClassName(), returns a HTMLCollection data type
// const veganElements = document.getElementsByClassName("vegan");
// Array.from(veganElements).forEach((ele) => console.log(ele)) // forEach() ไม่ได้ใช้กับ HTMLCollection จ้องเพิ่ม array.from() ก่อน (convert to array first)

// 093 ทัศนัยภูวดล
// find the first element of doucmen that has an ID values "id appetuzer" or "id soup"
const firstElement = document.querySelector("#appetizer, #soup");
console.log(firstElement);
// find all class "meat" elemet under <ul id = "appetizer"> or <ul id="soup"> only
const meatElemet = document.querySelectorAll("#appetizer .meat, #soup .meat");
meatElemet.forEach((ele) => console.log(ele));