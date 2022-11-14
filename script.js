function configGrid(size) {
    const grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function createGridDivs(size) {
    const container = document.querySelector('#grid');
    container.innerHTML = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add(`${i}-${j}`);
            container.appendChild(cell);
        }
    }
}

function reset() {
    let newSize = prompt("Enter the size of the grid", 16);
    while (newSize > 100) {
        alert('This grid is too big!');
        newSize = prompt("Enter the size of the grid", 16);
    }
    configGrid(newSize);
    createGridDivs(newSize);
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function generateRandomColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return "rgb("+r+","+g+","+b+")";
}

function darkenColor(color) {
    return "rgb(255,255,255)";
}

const grid = document.querySelector('#grid');
grid.addEventListener('mouseover', function(event) {
    let classes = event.target.classList
    if (classes.contains('cell')) {
        event.target.style.backgroundColor = generateRandomColor();
    }
})

