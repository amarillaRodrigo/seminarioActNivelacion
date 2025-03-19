document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('textInput');
    const button = document.getElementById('colorButton');
    let colorState = 0;

    inputField.style.backgroundColor = '#fff'; // Color inicial
    inputField.style.color = '#000'; // Color de texto inicial

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            alert(inputField.value);
        }
    });

    button.addEventListener('click', function() {
        if (colorState === 0) {
            inputField.style.backgroundColor = '#000'; // Fondo negro
            inputField.style.color = '#fff'; // Texto blanco
        } else if (colorState === 1) {
            inputField.style.backgroundColor = '#add8e6'; // Fondo celeste
            inputField.style.color = '#ff0000'; // Texto rojo
        } else {
            inputField.style.backgroundColor = '#fff'; // Fondo blanco
            inputField.style.color = '#000'; // Texto negro
        }
        colorState = (colorState + 1) % 3; // Alternar estado
    });
});