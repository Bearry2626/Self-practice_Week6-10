console.log(window.document) //root node
console.log(document) //root node
console.log(typeof document)  //object
console.log(document.getElementById("123")) //คือ element node ทีมันจะหา element ที่มี id=123 id ต้องไม่ซ้ำกัน
const htmlElement = document.documentElement // คือ  <html> element
console.log(htmlElement)

console.log(htmlElement.parentElement) //null จะแสดง parent element ของ <html> ซึ่งไม่มี
console.log(htmlElement.parentNode) //root node จะแสดง parent node ของ <html> ซึ่งคือ root node หรือ document
if (htmlElement.parentNode === document) { // parent Node ของ html = document 
  console.log("parent of html is a root node")
}
console.log(document.firstChild) //<!DOCTYPE html> จะแสดงตัวแรกที่อยู่ใน document
console.log(document.firstChild.nextSibling) // จะแสดงตัวที่ 2 ที่อยู่ใน document
//<!-- sample comment #1 -->
console.log(document.firstChild.previousSibling) //null
console.log(document.firstElementChild) //<html> จะแสดง element แรกที่อยู่ใน document
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
// มีอยู่ 2 ทาง คือ 1.for ธรรมดา 2.แปลงเป็น array ก่อน
const divChildren = divElement.children 
console.log(divChildren.length)  // ดหลือ 2 เพราะมันคัดกรอง  Element node
// คิดไรไม่ออกใช้ for loop
// for (let i = 0; i < divChildren.length; i++) {
//   console.log(divChildren[i])
// }
Array.from(divChildNodes).forEach((child) => console.log(child)) // แปลงเป็น array ก่อนถึงจะใช้ foreach ได้


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