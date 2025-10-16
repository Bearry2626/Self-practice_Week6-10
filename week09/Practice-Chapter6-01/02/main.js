const message = document.querySelector('#keyInput')
const display = document.querySelector('#keyLog')

message.addEventListener('keydown', function (e) {
    const p = document.createElement('p'); 

    if (e.key === 'Enter') {
      p.style.color = 'blue';
    } else {
      p.style.color = 'black';
    }

    p.textContent = `You pressed: ${e.key}`;
    
    keyLog.appendChild(p);
  });