// ทัศนัยภูวดล practice 1
// 093
const form = document.querySelector('form');
const message = document.querySelector('p');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form)
    const { username, email ,password, "confirm-password":confirmPassword } = Object.fromEntries(formData);

    if (password  !== confirmPassword ) {
        message.textContent = "password and confirm do not match, check again";
        message.style.color = "red";
        return;
    } 

    if (username.length === 0 || email.length === 0) {
        message.textContent = "missing some value, please try again";
        message.style.color = "red";
        return;
    }

    message.textContent = "you data completed";
    message.style.color = "green";
})