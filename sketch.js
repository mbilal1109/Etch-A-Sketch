const container = document.querySelector('#container');

for(let i = 0; i < 16; i++) {
    const innerContainer = document.createElement('div');
    
    // To set a class to each div being created
    innerContainer.setAttribute("class", "inner-container");
    container.appendChild(innerContainer);
}