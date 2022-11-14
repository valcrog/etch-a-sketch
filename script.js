function createGridDivs(size) {
    const container = document.querySelector('#grid');
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add(`${i}-${j}`)
            container.appendChild(cell);
        }
    }
}
