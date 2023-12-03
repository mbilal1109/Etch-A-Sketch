const container = document.querySelector('#container');
const changeGridButton = document.querySelector("button");
let grid = 0;

function getDefaultGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const innerContainer = document.createElement('div');
        
        // To set a class to each div being created
        innerContainer.setAttribute("class", "inner-container");
        container.appendChild(innerContainer);
        container.style.setProperty('grid-template-columns', 'repeat(' + 16 + ', 1fr)');
        container.style.setProperty('grid-template-rows', 'repeat(' + 16 + ', 1fr)');
    }
}

function createGrid(grid) {
    if (grid == 0) {
        getDefaultGrid();
    }
    else {
        /**
         * Removes the inner container divs before creating
         * the ones user requested.
         * innerHTML = '' -> removes all html from the container div.
         */
        // container.innerHTML = '';
        let totalDivs = grid * grid;
        for (let i = 0; i < totalDivs; i++) {
            const innerContainer = document.createElement('div');
            innerContainer.setAttribute("class", "inner-container");
            container.appendChild(innerContainer);
            container.style.setProperty('grid-template-columns', 'repeat(' + grid + ', 1fr)');
            container.style.setProperty('grid-template-rows', 'repeat(' + grid + ', 1fr)');
        }
    }
}

createGrid(grid);
changeGridButton.addEventListener('click', function () {
    grid = prompt('Enter Grid');
    createGrid(grid);
});