const gridBtns = document.querySelectorAll('.gridBtn');
const gridContainer = document.querySelector('#container');
const changeGrid = document.querySelector('#changeGrid');
const gridRange = document.querySelector('#gridRange')
const rangeValue = document.querySelector('#rangeValue')

window.onload = function() {
    makeGrid(16,16);
}

gridRange.addEventListener('input', () => {
    let num = gridRange.value;
    rangeValue.textContent = `${num}x${num}`
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
        let rgb = randomRgb()
        gridItem.setAttribute("style", `width: ${960/rows}px; 
        background: rgb(${rgb});`);})
    }
};}

function randomInt(max) {
    return Math.floor(Math.random()*(max +1));
}

function randomRgb() {
    let r = randomInt(255);
    let g = randomInt(255);
    let b = randomInt(255);
    return [r,g,b];
}

