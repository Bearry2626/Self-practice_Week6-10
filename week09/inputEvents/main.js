const message = document.querySelector('#message')
const display = document.querySelector('p')

// message.addEventListener('input', function () {
//   display.textContent = message.value
// })

// ในกรฯีนี้ event input จะมีพฤตกิกรรมเมื่อมีการพิมพ์ จะเรียกทันทีไม่ต้อง enter

message.addEventListener('change', function () {
  console.log('input ')
  display.textContent = message.value
})

// ในกรฯีนี้ event change จะเหมือนกัน แต่ต้องกด enter ถึงจะเรียกมาทำงาน -> เปลี่ยนแปลง