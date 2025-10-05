//1. getElementsByName(), return NodeList (array-like) data type, implement forEach
const fnameElements = document.getElementsByName("fname")
console.log(fnameElements.length) //2
fnameElements.forEach((ele) => console.log(ele))


const fnameArray = Array.from(fnameElements)
fnameArray.forEach((ele) => {
  console.log(ele.children)
})

//2. getElementsByTagName(), return HTMLCollection (array-like) data type
const inputElements = document.getElementsByTagName("input")
Array.from(inputElements).forEach((ele) => console.log(ele))

//3. getElementsByClassName(), return HTMLCollection (array-like)  data type
const veganElements = document.getElementsByClassName("vegan")
Array.from(veganElements).forEach((ele) => console.log(ele))

//4. find the first element of document that has an ID values "appetizer" or "soup"
const firstElement = document.querySelector("#appetizer, #soup")
console.log(firstElement)
//5. find all class "meat" elements under <ul id="appetizer"> or <ul id="soup"> only

// find all class "meat" elemet under <ul id = "appetizer"> or <ul id="soup"> only
const meatElemet = document.querySelectorAll("#appetizer .meat, #soup .meat")
meatElemet.forEach((ele) => console.log(ele))
 