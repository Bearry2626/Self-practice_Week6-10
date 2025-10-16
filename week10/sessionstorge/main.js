// let like = sessionStorage.getItem("like")
// if (sessionStorage.getItem("like") === null)
//     sessionStorage.setItem("like", like)
// else sessionStorage.setItem("like", ++like)
// alert(like)

// session จะไม่ข้ามกัน ปิดเปิดยังไงก็จะเริ่มใหม่

// localStorate
let like = Number(localStorage.getItem("like")) //-> ครอบnumber เพราะ browserได้ค่าเป็น string เสมอ

if (localStorage.getItem("like") === null)
    localStorage.setItem("like", like)
else localStorage.setItem("like", ++like)

alert(localStorage.getItem("like"))



// ของอาจารยื เหมือนกันแต่เขียนคนละแบบ
// let like = localStorage.getItem("like")

// if (like === null) localStorage.setItem("like", 1)
// else localStorage.setItem("like", ++like)

// alert(localStorage.getItem("like"))