const gridBtns = document.querySelectorAll('.gridBtn');
const gridContainer = document.querySelector('#container');
const changeGrid = document.querySelector('#changeGrid');
const gridRange = document.querySelector('#gridRange')
const rangeValue = document.querySelector('#rangeValue')
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const colorMode = document.querySelector('#colorMode');
let num = gridRange.value;


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

colorMode.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) =>
    item.addEventListener('mouseover', ()=>{
    item.setAttribute('style', `width: ${960/num}px; background: black;`)
    }))
})

eraser.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) =>
    item.addEventListener('mouseover', ()=>{
    item.setAttribute('style', `width: ${960/num}px; background: white;`)
    }))
})
   

// function changeMode() {
//     if(eraser.className === "eraser") {
//         eraser.classList.add("drawing")
//         eraser.textContent = "Drawing";
//         const gridItem = document.querySelector('.grid-item')
//         gridItem.addEventListener('mouseover', () => {
//         gridItem.setAttribute('style', `width: ${960/num}px; 
//             background: black;)`)
//         });
//     }
//     else {
//         eraser.classList.add("eraser");
//         eraser.textContent = "Eraser";
//         const gridItem = document.querySelector('.grid-item')
//         gridItem.addEventListener('mouseover', () => {
//         gridItem.setAttribute('style', `width: ${960/num}px; 
//             background: white;)`)
//         });
//     }

// }

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


    }};
}


window.onload = function() {
    makeGrid(16,16);
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