//  3. replace Beef Soup with Pork Soup
//2.1 get its parent
const soupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Beef Soup") refNode = element
})
//2.3 create new node <li class="meat">Pork Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Pork Soup"
newNode.setAttribute("class", "meat")
//2.4 replaceChild(newNode, refNode)
soupUlElement.replaceChild(newNode, refNode)