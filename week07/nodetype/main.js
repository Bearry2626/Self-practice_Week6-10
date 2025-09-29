// 093 ทัศนัยภูวดล
// 1. What is the node type of firstChild of root node?
console.log(document.firstChild.nodeType)
// 2. if node type is an element node, display "Hello, HTML node", otherwise ,display "Hello, any node"
if (document.firstChild.nodeType === 1) {
  console.log("Hello, HTML node")
} else {
  console.log("Hello, any node")
}   

// common properties
const divElement = document.getElementById('123')
console.log(divElement.nodeName)
console.log(divElement.nodeType)
console.log(divElement.nodeValue) // null เพราะ element ไม่มี nodeValu

const pext = divElement.childNodes[1].childNodes[0]
console.log(pText.nodeName)
console.log(pText.nodeType)
console.log(pText.nodeValue) // มี nodeValue เพราะเป็น text node

// Create tag attribute text node element
// ถ้าให้ dinamic create = ตอนWebpage load ไม่เคยมี node 
// นี้ไม่เคยมี tag html นี้ และให้สร้างหลัง rander ไปแล้ว

const newDiv = document.createElement('div') // สร้าง div element
// กลุ่มสร้างจะเป็น createElement, createTextNode, createAttribute
//1. create <p></p>
const pElement = document.createElement("p") //<p></p>

//2. create id="p5"
const idAttr = document.createAttribute("id")
idAttr.value = "p5"

//3. binding id="p5" to <p>
pElement.setAttributeNode(idAttr) //<p id="p5"></p>

//4. create text value "#5"
const pText = document.createTextNode("#5")

//5. binding "#5" to <p>
pElement.appendChild(pText) //<p id="p5">#5</p>

//6. binding <p id="p5">#5</p> to <body>
const body = document.body
body.appendChild(pElement) //<body>....<p id="p5">#5</p></body>
