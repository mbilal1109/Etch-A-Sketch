const container = document.querySelector('#container');
const changeGridButton = document.querySelector("button");
let grid = 0;

function getDefaultGrid() {
    for (let i = 0; i < 16; i++) {
        const innerContainer = document.createElement('div');

        // To set a class to each div being created
        innerContainer.setAttribute("class", "inner-container");
        container.appendChild(innerContainer);
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
        container.innerHTML = '';
        for (let i = 0; i < grid; i++) {
            const innerContainer = document.createElement('div');
            innerContainer.setAttribute("class", "inner-container");
            container.appendChild(innerContainer);
        }
    }
}

createGrid(grid);
changeGridButton.addEventListener('click', function () {
    grid = prompt('Enter Grid');
    createGrid(grid);
    grid = 0;
});