document.addEventListener('DOMContentLoaded', () => {
    const bgColor = localStorage.getItem('bgColor') || '#ffffff';
    const fontColor = localStorage.getItem('fontColor') || '#000000';
    const fontSize = localStorage.getItem('fontSize') || 'medium';

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    document.getElementById('textSample').style.fontSize = fontSizeMap(fontSize);

    document.getElementById('bgColor').value = bgColor;
    document.getElementById('fontColor').value = fontColor;
    document.getElementById('fontSize').value = fontSize;
});


function fontSizeMap(size) {
    switch(size) {
        case 'small': return '12px';
        case 'medium': return '16px';
        case 'large': return '20px';
        default: return '16px'; 
    }
}


document.getElementById('saveBtn').addEventListener('click', () => {
    const bgColor = document.getElementById('bgColor').value;
    const fontColor = document.getElementById('fontColor').value;
    const fontSize = document.getElementById('fontSize').value;

    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('fontColor', fontColor);
    localStorage.setItem('fontSize', fontSize);

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    document.getElementById('textSample').style.fontSize = fontSizeMap(fontSize);
});


document.getElementById('resetBtn').addEventListener('click', () => {
    localStorage.removeItem('bgColor');
    localStorage.removeItem('fontColor');
    localStorage.removeItem('fontSize');

    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    document.getElementById('textSample').style.fontSize = fontSizeMap('medium');

    document.getElementById('bgColor').value = '#ffffff';
    document.getElementById('fontColor').value = '#000000';
    document.getElementById('fontSize').value = 'medium';
});