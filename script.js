const gridBtns = document.querySelectorAll('.gridBtn');
const gridContainer = document.querySelector('#container');
const changeGrid = document.querySelector('#changeGrid');
const gridRange = document.querySelector('#gridRange')
const rangeValue = document.querySelector('#rangeValue')
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const colorMode = document.querySelector('#colorMode');
let num = gridRange.value;

window.onload = function() {
    makeGrid(16,16);
}

gridRange.addEventListener('input', () => {
    num = gridRange.value;
    rangeValue.textContent = `${num}x${num}`
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => item.remove());
    makeGrid(num,num);
})


clear.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => item.setAttribute('style', `width: ${960/num}px; background: white;`));
});

clear.addEventListener('mouseover', () => {
    clear.classList.add("hover");
})

clear.addEventListener('mouseout', () => {
    clear.classList.remove("hover");
})

eraser.addEventListener('mouseover', () => {
    eraser.classList.add("hover");
})

eraser.addEventListener('mouseout', () => {
    eraser.classList.remove("hover");
})

function makeGrid(rows, columns) {
    for(let i= 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('style', `width: ${960/rows}px;` );
        gridContainer.appendChild(gridItem);
        
        gridItem.addEventListener('mouseover', () => {
        let rgb = randomRgb()
        gridItem.setAttribute('style', `width: ${960/rows}px; 
        background: rgb(${rgb});`);})
        
        eraser.addEventListener('click', () => {
            eraser.textContent = "Drawing"
            gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('style',`width: ${960/num}px; background: white;`)});
        });
    }};
}



function randomInt(max) {
    return Math.floor(Math.random()*(max +1));
}

function randomRgb() {
    let r = randomInt(255);
    let g = randomInt(255);
    let b = randomInt(255);
    return [r,g,b];
}