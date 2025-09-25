// 093 ทัศนัยภูวดล
// 1. What is the node type of firstChild of root node?
console.log(document.firstChild.nodeType)
// 2. if node type is an HTML node, display "Hello, HTML node", otherwise ,display "Hello, any node"
if (document.firstChild.nodeType === 1) {
  console.log("Hello, HTML node")
} else {
  console.log("Hello, any node")
}   
