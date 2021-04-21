// imports
import { renderHeaderNav } from '../dom-utils.js';
import { getSpecificGarden, getCurrentGarden, setGarden } from '../local-storage-utilities.js';
import { plants } from '../data/data.js';
import { phToColor } from '../utils.js';

// grab html elements
const section = document.querySelector('.garden-grid');
const plantSelector = document.getElementById('plant-selector');
const printButton = document.querySelector('.print-button');
const gardenImage = document.querySelector('.garden-image');
const gardenTitle = document.querySelector('.garden-title');

// set up state
const gardenName = getCurrentGarden();
let gardenObject = getSpecificGarden(gardenName);

// generate image and title
gardenImage.src = gardenObject.avatar;
gardenTitle.textContent = 'Garden Name: ' + gardenName.charAt(0).toUpperCase() + gardenName.slice(1);

// define functions
function plantPlant(div, plantSlug) {
    const plant = plants[plantSlug];
    div.title = plant.commonName + '\npH: ' + ((plant.minPH + plant.maxPH) / 2).toFixed(1);
    div.classList.add('filled');
    div.textContent = '✿';
    div.style.color = plant.flowerColor;
    div.style.backgroundColor = phToColor(plant.minPH, plant.maxPH);
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
    for (let plant of Object.values(plants)) {
        const option = document.createElement('option');
        option.value = plant.slug;
        option.textContent = plant.commonName;
        plantSelector.appendChild(option);
    } 
}

printButton.addEventListener('click', () => {
    window.print();
});
// initialize page 
renderHeaderNav();
generateGardenGrid();
createPlantOptions();