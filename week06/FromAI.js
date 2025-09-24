// ให้ AI Genarate โจทย์มาให้จากสไลด์ที่อาจารย์สอนในวันนี้ เรียงความากจากน้อยไปมาก
// ระดับง่าย (Basic)
// 1. First-Class Function
// เขียนฟังก์ชัน sayHello ที่รับชื่อและฟังก์ชัน formatter
// แต่แทนที่จะเปลี่ยนชื่อเป็นตัวพิมพ์ใหญ่ ให้ลองแปลงชื่อกลับด้าน เช่น Alice → ecilA
function sayHello(name, formatter){
    return formatter(name)
}

const reversetext = (text) => {
    return text.split("").reduce((a,b) => b + a, "") 
}

console.log(sayHello("satang", reversetext)); 

// 2. Declarative Code
// ให้ numbers = [1,2,3,4,5,6,7,8,9,10]
// เขียนโค้ดแบบ declarative ที่หาตัวเลข คี่ ทั้งหมด คูณด้วย 3 แล้วบวก 1
// hint: คำตอบควรเป็น array ใหม่ เช่น [4, 10, 16, ...]
let numbers = [1,2,3,4,5,6,7,8,9,10]

const result = numbers.filter(nums => nums % 2 !== 0).map(nums => nums * 3 + 1)
console.log(result)


// ระดับปานกลาง (Intermediate)
// 1. Immutability
// มี array scores = [45, 67, 89, 32, 100]
// เขียนฟังก์ชันที่ ไม่เปลี่ยนค่าเดิมของ array แต่สร้าง array ใหม่ที่เพิ่ม 5 คะแนนให้ทุกคน
// จากนั้น filter เฉพาะคนที่สอบได้เกิน 70 คะแนน
// สุดท้าย หาผลรวมคะแนนทั้งหมด
let scores = [45, 67, 89, 32, 100]
let sum = scores.map(num=> num +5).filter(num => num > 70)


console.log(sum)


// 2.Pure vs Impure Function
// เขียน ฟังก์ชัน impure ที่ใช้ Math.random() ในการสุ่มตัวเลขแล้วบวกกับค่าที่รับเข้ามา
// แล้วเขียน pure function ที่เลียนแบบพฤติกรรมเดียวกัน แต่ต้องส่งค่า "seed" เข้ามาแทนการสุ่ม
// Impure Function
function Impure(ramdom){
    return ramdom + Math.random()
}

console.log(Impure(1))
console.log(Impure(1))


// pure function 
function random(seed) {
    const a = 2
    const b = 5
    const c = 6

    return (a * seed + b) % c
}

function pure(x, seed){
    const thissedd = random(seed)
    const vrandom = thissedd * 2
    return x + vrandom
}
console.log(pure(10, 10))
console.log(pure(10, 10))

const set = new Set(['hello', 'world']);
for (const elem of set) {
console.log(elem);
}