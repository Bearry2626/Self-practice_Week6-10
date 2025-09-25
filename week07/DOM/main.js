console.log(window.document) //root node
console.log(document) //root node
console.log(typeof document)
console.log(document.getElementById("123"))
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) //null
console.log(htmlElement.parentNode) //root node
if (htmlElement.parentNode === document) {
  console.log("parent of html is a root node")
}

console.log(document.firstChild) //<!DOCTYPE html>
console.log(document.firstChild.nextSibling)
//<!-- sample comment #1 -->
console.log(document.firstChild.previousSibling) //null
console.log(document.firstElementChild) //<html>
console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
console.log(document.lastChild) //<!-- sample comment #3 -->
console.log(document.lastElementChild) //<html lang="en">


 
// 1. get all child nodes uder <div id = '123'>
const divElement = document.getElementById("123")
// 2. get all node type children (Nodelist can use foreach)
const divChildNodes = divElement.childNodes 
console.log(divChildNodes.length) 
divChildNodes.forEach((child) => console.log(child))

// 3. get only element type children (return (dinamic) HTMLCollection, cannot use foreach)
const divChildren = divElement.children 
console.log(divChildren.length)  // ดหลือ 2 เพราะมันคัดกรอง  Element node
// คิดไรไม่ออกใช้ for loop
// for (let i = 0; i < divChildren.length; i++) {
//   console.log(divChildren[i])
// }
Array.from(divChildNodes).forEach((child) => console.log(child)) // แปลงเป็น array ก่อนถึงจะใช้ foreach ได้

//  get children มีได้ 2 แบบ
// 1. childNodes (all node type) ได้ลูกทั้งหมด
// 2. children (element type only) ได้ลูกที่เป็น element เท่านั้น

const divElement1 = document.getElementById("123") 
// 1. get all available parent nodes of <div id = '123'>
const divattrs = divElement1.attributes
console.log(divattrs.length)

for (let i = 0; i < divattrs.length; i++) {
  const attrName = divattrs[i].name // get attribute name
  const attrValue = divattrs[i].value // get attribute value
  console.log(`${attrName} = ${attrValue}`)
  console.log(divattrs[i].ownerElement) // บอก Element ที่ attribute นี้เป็นของใคร
}

console.log(divElement1.getAttribute("id")) // หา arttribute value โดยใช้ attribute name
console.log(divElement1.getAttribute("style")) // หา arttribute value โดยใช้ attribute name


const pElement = document.createElement("p") // สร้าง element p