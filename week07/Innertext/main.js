let el = document.getElementById("demo");
console.log(el.innerHTML);
console.log(el.innerText);
console.log(el.textContent);


//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
let p = document.createElement("p");
p.innerText = "Sample Italic Text"
el.appendChild(p); 
//1.5 add format='italic' attribute to <p>
p.setAttribute("format", "italic"); 
//2. try to add three different text types

//2.1 add <i>Sample Italic Text</i> with innerHTML
p.innerHTML = "<i>Sample Italic Text</i>";
//2.2  add <i>Sample Italic Text</i> with innerText
p.innerText = "<i>Sample Italic Text</i>";
//2.3 add <i>Sample Italic Text</i> with textContent
p.textContent = "<i>Sample Italic Text</i>";