const info = document.getElementById('info')

info.addEventListener('mouseout', (event) => {
  console.log('mouse out')
})
info.addEventListener('mouseover', (event) => {
  console.log('mouse over')
})
window.addEventListener('mousemove', (event) => { 
  info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
})