// imports
import { renderHeaderNav } from '../dom-utils.js';
import { getSpecificGarden, getCurrentGarden, setGarden } from '../local-storage-utilities.js';
import { plants } from '../data/data.js';
import { phToColor } from '../utils.js';

// grab html elements
const section = document.querySelector('.garden-grid');
const plantSelector = document.getElementById('plant-selector');

// set up state
const gardenName = getCurrentGarden();
let gardenObject = getSpecificGarden(gardenName);

let selectedPlant = ''; // should contain the slug of the plant

// define functions
function plantPlant(div, plantSlug) {
    const plant = plants[plantSlug];
    div.title = plant.commonName;
    div.classList.add('filled');
    div.textContent = '✿';
    const avgpH = (Number(plant.minPH) + Number(plant.maxPH)) / 2
    div.style.color = plant.flowerColor;
    div.style.backgroundColor = phToColor(plant.minPH, plant.maxPH);

    /*// will remove this once pH function is implemented:
    const bgColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fffffc'];
    div.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];*/
}

function generateGardenGrid() {
    let countRow = 0;
    for (let row of gardenObject.rows){
        countRow++;
        let countCol = 0;
        for (let box of row) {  //each row is an array, each box an object
            countCol++;
            const div = document.createElement('div');

            // if the box was already filled with a plant, load that
            if (box.plant) {
                plantPlant(div, box.plant);
            } else {
                div.textContent = `Box ${countRow} - ${countCol}`;
            }

            // add event listener for when box is clicked on
            const nRow = countRow - 1;
            const nCol = countCol - 1;
            div.addEventListener('click', () => {
                console.log(plantSelector.value)
                if (plantSelector.value) {
                    // update the state
                    gardenObject.rows[nRow][nCol].plant = plantSelector.value;
                    setGarden(gardenName, gardenObject);
                    gardenObject = getSpecificGarden(gardenName);

                    // update the view
                    plantPlant(div, plantSelector.value);
                }
            });

            // append the child
            section.appendChild(div);
        }
    }
}

function createPlantOptions() {
    console.log(plants);
    for (let plant of Object.values(plants)) {
        const option = document.createElement('option');
        option.value = plant.slug;
        option.textContent = plant.commonName;
        plantSelector.appendChild(option);
    } 
}

// add event handlers
plantSelector.addEventListener('input', () => {
    selectedPlant = plantSelector.value;
});

// initialize page 
renderHeaderNav();
generateGardenGrid();
createPlantOptions();