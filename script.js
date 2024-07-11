const gridContainer = document.querySelector('#grid_container')
const buttonCreateGrid = document.querySelector('#button_new_grid')

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Retornar a cor no formato RGB
    return `rgb(${r}, ${g}, ${b})`;
}


buttonCreateGrid.addEventListener('click', () => {
    let gridSize = prompt('Choose a grid layout (ex: 16)')
    let gridLayout = '' 
    for (let i = 0; i < gridSize**2; i++) {
        gridLayout += '<div class="container_item"></div>'
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    gridContainer.innerHTML = `${gridLayout}`
    const gridContainerItems = document.querySelectorAll('.container_item')
    gridContainerItems.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = `${generateRandomColor()}`;
        })
    });
})

