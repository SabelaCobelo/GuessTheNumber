let randomNumber = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
let attempts = 0; // Contador de intentos
let startTime = Date.now(); // Marca de tiempo de inicio

// Función para verificar el intento del usuario
function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Número de intentos: ${attempts}`;

    if (userGuess === randomNumber) {
        const totalTime = Math.floor((Date.now() - startTime) / 1000);
        feedback.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos y ${totalTime} segundos.`;
        disableInput();
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'El número es más grande. ¡Intenta de nuevo!';
    } else {
        feedback.textContent = 'El número es más pequeño. ¡Intenta de nuevo!';
    }

    document.getElementById('guess').value = ''; // Limpiar la entrada
}

// Función para reiniciar el juego
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generar nuevo número aleatorio
    attempts = 0;
    startTime = Date.now(); // Reiniciar el tiempo
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = 'Número de intentos: 0';
    document.getElementById('timer').textContent = 'Tiempo: 0 segundos';
    enableInput();
    document.getElementById('guess').value = '';
}

// Deshabilitar entrada de texto y botones para evitar más intentos
function disableInput() {
    document.getElementById('guess').disabled = true;
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}

// Habilitar entrada de texto y botones para comenzar el juego nuevamente
function enableInput() {
    document.getElementById('guess').disabled = false;
    document.querySelectorAll('button').forEach(button => button.disabled = false);
}

// Actualizar el temporizador cada segundo
setInterval(function() {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = `Tiempo: ${totalTime} segundos`;
}, 1000);
