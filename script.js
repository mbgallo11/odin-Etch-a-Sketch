const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    // Agregar evento de cambio de color al pasar el cursor sobre los cuadrados
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
        });
    });
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

resetButton.addEventListener('click', () => {
    const newSize = prompt('Ingrese el número de cuadrados por lado (máx. 100):');
    const size = Math.min(Math.max(parseInt(newSize) || 16, 1), 100);
    createGrid(size);
});

createGrid(16); // Inicializar con una cuadrícula de 16x16
