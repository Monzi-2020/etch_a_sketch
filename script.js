const gridBtns = document.querySelectorAll('.gridBtn');
const gridContainer = document.getElementById('container');

function makeGrid(rows, columns) {
    for(let i= 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('style', `width: ${480/rows}px;` );
        gridContainer.appendChild(gridItem);
    }
}
}

window.onload = function() {
    makeGrid(16,16);
}

gridBtns.forEach((gridBtn) => {
    gridBtn.addEventListener('click',() => {
        const lows = gridBtn.id;
        const columns = gridBtn.id;
        makeGrid(lows, columns);
    })
})



