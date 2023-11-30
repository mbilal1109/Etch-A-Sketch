const container = document.querySelector('#container');

for(let i = 0; i < 16; i++) {
    const innerContainer = document.createElement('div');
    innerContainer.setAttribute("class", "inner-container");
    container.appendChild(innerContainer);
}