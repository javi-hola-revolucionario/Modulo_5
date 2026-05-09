import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
const guessList = document.getElementById('guess-list');

let guesses = [];

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else {
        guesses.push(numeroJugador);
        updateGuessList();

        if (numeroJugador === numeroSecreto) {
            mensaje.textContent = `¡Felicidades! ¡Adivinaste el número ${numeroSecreto} en ${guesses.length} intentos!`;
        } else if (numeroJugador < numeroSecreto) {
            mensaje.textContent = 'El número es más alto.';
        } else {
            mensaje.textContent = 'El número es más bajo.';
        }
    }
});

function updateGuessList() {
    guessList.innerHTML = '';
    guesses.forEach((guess, index) => {
        const li = document.createElement('li');
        li.textContent = `Intento ${index + 1}: ${guess}`;
        guessList.appendChild(li);
    });
}



setupCounter(document.querySelector('#counter'))
