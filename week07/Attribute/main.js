// Attribute Node ไม่ใช่ Node ใน DOM อย่าพยายามไปหา 
// - parentNode
// - previousSibling
// - nextSibling
// เพราะ Attribute Node ไม่มีความสัมพันธ์กับ Node อื่นๆ และได้ output เป็น null
// ถามได้อย่างเดียวว่า attribute node นี้มีชื่ออะไร มีค่าอะไร
// Attribute Node จะมีความสัมพันธ์กับ Element Node ที่เป็นเจ้าของ (ownerElement) เท่านั้น
// Attribute Node จะมี property 3 อย่างคือ name, value, ownerElement

// owner Document
const ownerDocument = document.getElementById('123')
console.log(ownerDocument.ownerDocument === document)

// owner Element
const ownerElement = document.getElementById('123')
const attrId = ownerElement.getAttributeNode('id')
console.log(attrId.ownerElement === ownerElement) // true
console.log(attrId.ownerElement === document) // false

// documentElement.ownerDocument
console.log(document.documentElement.ownerDocument === document); // true