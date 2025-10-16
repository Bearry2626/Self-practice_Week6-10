const inputMessage = document.getElementById('message')

inputMessage.addEventListener('keyup', (event) => {
    if (event.key === 'Enter')
    console.log(event.target.value)
})

// อันนี้จะสนใจ key enter -> ดึงค่าใน box ออกมา

// ถ้าต้องการให้ทุกทุกครั้งที่พิมพ์ในโชว์ออกมา ไม่ใช่เฉพาะตอน enter
inputMessage.addEventListener('keyup', (event) => {
    console.log(event.key) // กรณีจะเอาแค่ key อย่างเดียว จะขึ้นทุกครั้งที่keyup
    console.log(event.code) // จะมี key ด้านหน้า
})

// เวลาจะ compare อจ แนะนำให้ใช้ .key compare ตาม carater นั้นได้เลย
