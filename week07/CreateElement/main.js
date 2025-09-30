// Create tag attribute text node element
// ถ้าให้ dinamic create = ตอนWebpage load ไม่เคยมี node 
// นี้ไม่เคยมี tag html นี้ และให้สร้างหลัง rander ไปแล้ว

const newDiv = document.createElement('div') // สร้าง div element
// กลุ่มสร้างจะเป็น createElement, createTextNode, createAttribute
//1. create <p></p>
const pElement = document.createElement("p") //<p></p>
// ------------------------------------------------------------------
//2. create id="p5"
// shot cut sol#1
const idAttr = document.createAttribute("id")
idAttr.value = "p5"
// shot cut sol#2 ถ้าเลือกวิธีนี้ ไม่ต้องbingdingในขั้นตอนที่3
pElement.setAttribute("id", "p5") //<p id="p5"></p>
// ------------------------------------------------------------------
//3. binding id="p5" to <p>
pElement.setAttributeNode(idAttr) //<p id="p5"></p>
// ------------------------------------------------------------------
//4. create text value "#5"
// sol #1
const pText = document.createTextNode("#5")
// sol #2 ถ้าเลือกวิธีนี้ ไม่ต้อง binding ในขั้นตอนที่5
pElement.texftContent = "#5" //<p id="p5">#5</p>
// ------------------------------------------------------------------
//5. binding "#5" to <p>
pElement.appendChild(pText) //<p id="p5">#5</p>
// ------------------------------------------------------------------
//6. binding <p id="p5">#5</p> to <body>
const body = document.body
body.appendChild(pElement) //<body>....<p id="p5">#5</p></body>
