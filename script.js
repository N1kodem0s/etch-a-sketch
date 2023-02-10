function createGrid(size) {
  let container = document.querySelector("#container");
  container.textContent = '';
  container.style.gridTemplate = `repeat(${size} , 1fr) / repeat(${size} , 1fr)`;

  for(let currentGrid = 0; currentGrid < size * size; currentGrid++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", randomColor);
    container.appendChild(gridItem);
  }
  } 

function randomColor(event) {
  event.target.style = `
  background-color: 
  rgb(${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)})`;
  event.target.removeEventListener("mouseover", randomColor);
}
createGrid(16); 

var size = 16;
const newBtn = document.querySelector("#new>.button-new");
 newBtn.addEventListener('click', () => {
    size = parseInt(prompt("Choose a number between 2 and 100?"));
      createGrid(size);
});


const clearBtn = document.querySelector("#clear>.button-clear");
    clearBtn.addEventListener('click', () => {
      createGrid(size);   
      });
