const container = document.querySelector('#container');
const changeGridButton = document.querySelector("#grid-button");
const resetButton = document.querySelector("#reset-button");
let innerContainer = "";
let grid = 0;

function getDefaultGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        innerContainer = document.createElement('div');
        
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
         * the ones user requested
         * innerHTML = '' -> removes all html from the container div
         */
        container.innerHTML = '';
        let totalDivs = grid * grid;
        for (let i = 0; i < totalDivs; i++) {
            innerContainer = document.createElement('div');
            innerContainer.setAttribute("class", "inner-container");
            container.appendChild(innerContainer);
            container.style.setProperty('grid-template-columns', 'repeat(' + grid + ', 1fr)');
            container.style.setProperty('grid-template-rows', 'repeat(' + grid + ', 1fr)');
        }
        getHoverEffect();
    }
}

createGrid(grid);
getHoverEffect();
changeGridButton.addEventListener('click', function () {
    grid = prompt('Enter Grid');
    if(grid >= 100) {
        alert('Pick Below 100');
    }
    createGrid(grid);
});

function getHoverEffect() {
  const innerDivs = document.querySelectorAll(".inner-container");
  innerDivs.forEach((innerDiv) => {
    innerDiv.addEventListener("mousemove", function () {
      innerDiv.classList.add("hover-effect");
    });
  });
}

resetButton.addEventListener('click', function() {
    window.location.reload();
})