const gridBtns = document.querySelectorAll('.gridBtn');
const gridContainer = document.querySelector('#container');
const gridChange = document.querySelector('#gridChange');

window.onload = function() {
    makeGrid(16,16);
}

gridChange.addEventListener('click', () => {
    const num = prompt("What number of grid squres you want? You can type between 1-100", 16);
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => item.remove());
    makeGrid(num,num);
})

function makeGrid(rows, columns) {
    for(let i= 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('style', `width: ${960/rows}px;` );
        gridContainer.appendChild(gridItem);
        
        gridItem.addEventListener("mouseover", () => {
        gridItem.classList.toggle("hover");
        })
    }
};}


