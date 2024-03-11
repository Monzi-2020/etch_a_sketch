const gridBtns = document.querySelectorAll('.gridBtn');
const gridContainer = document.getElementById('container');

window.onload = function() {
    makeGrid(16,16);

}

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

gridBtns.forEach((gridBtn) => {
gridBtn.addEventListener('click',() => {
        gridContainer.removeChild(gridItem);
        const lows = gridBtn.id;
        const columns = gridBtn.id;
        makeGrid(lows, columns);
    })
})


