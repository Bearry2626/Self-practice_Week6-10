const alink = document.querySelector("a")
alink.addEventListener("click" , (e) => {
    e.preventDefault()
    console.log("youe click wen sit")
})

// preventDefault() - submit form ไม่ให้ไป ให้front end validate ให้เรียบร้อย