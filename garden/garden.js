// imports
import { renderHeaderNav } from '../dom-utils.js';
import { getSpecificGarden, getCurrentGarden } from '../local-storage-utilities.js';
import { plants } from '../data/data.js';

// grab html elements
const section = document.querySelector('.garden-grid');
const plantSelector = document.getElementById('plant-selector');

// set up state
let selectedPlant = ''; // should contain the slug of the plant

// define functions
function generateGardenGrid() {
    const gardenName = getCurrentGarden();
    const gardenObject = getSpecificGarden(gardenName);
    let countRow = 0;
    for (let row of gardenObject.rows){
        countRow++;
        let countCol = 0;
        for (let box of row) {  //each row is an array, each box an object
            countCol++;
            const div = document.createElement('div');
            div.textContent = `Box ${countRow} - ${countCol}`;
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

// initialize page and add handlers
renderHeaderNav();
generateGardenGrid();
createPlantOptions();