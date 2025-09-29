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

const pText = divElement.childNodes[1]
console.log(pText.nodeName)
console.log(pText.nodeType)
console.log(pText.nodeValue) // มี nodeValue เพราะเป็น text node