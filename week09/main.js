const aLink = document.querySelector("a");
aLink.addEventListener("clink", (event) => {
    event.preventDefault() // ทำหน้าที่ ป้องกันการทำงานปกติของลิงก์
    console.log("WEB VISIT");
})


