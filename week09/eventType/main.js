const message = document.querySelector('#message')
const display = document.querySelector('p')
message.addEventListener('change', function () {
display.textContent = message.value
})

