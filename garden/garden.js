// imports
import { renderHeaderNav } from '../utils-dom.js';
import { getSpecificGarden, getCurrentGarden, setGarden } from '../utils-local-storage.js';
import { plants } from '../data/data.js';
import { phToColor } from '../utils.js';

// grab html elements
const section = document.querySelector('.garden-grid');
const plantSelector = document.getElementById('plant-selector');
const printButton = document.querySelector('.print-button');
const chartButton = document.querySelector('.chart-button');
const gardenImage = document.querySelector('.garden-image');
const gardenTitle = document.querySelector('.garden-title');

// set up state
const gardenName = getCurrentGarden();
let gardenObject = getSpecificGarden(gardenName);

// generate image and title
gardenImage.src = `.${gardenObject.avatar}`;
gardenTitle.textContent = `${gardenName.charAt(0).toUpperCase()}${gardenName.slice(1)}`;

// define functions
function plantPlant(div, plantSlug, nRow, nCol) {
    // place plant inside of grid box
    const plant = plants[plantSlug];
    const plantImage = document.createElement('img');
    const lightEmoji = document.createElement('span');
    const deleteButton = document.createElement('button');
    const iconContainer = document.createElement('div');

    lightEmoji.textContent = plant.light_emoji;
    plantImage.src = plant.image;

    div.innerHTML = '';
    // this could use some explanatory comments
    div.title = plant.commonName + '\npH: ' + ((plant.minPH + plant.maxPH) / 2).toFixed(1);    
    div.style.backgroundColor = phToColor(plant.minPH, plant.maxPH);

    // make delete button function
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        // update view
        plantSelector.value = null;
        div.style.backgroundColor = 'transparent';
        div.innerHTML = '';
        // update state
        gardenObject.rows[nRow][nCol] = {};
        setGarden(gardenName, gardenObject);
        gardenObject = getSpecificGarden(gardenName);
    });

    // add classes and append dom elements
    div.classList.add('wrapper-v');
    lightEmoji.classList.add('light-emoji');
    deleteButton.classList.add('delete-button');
    iconContainer.classList.add('icon-container');
    iconContainer.append(deleteButton, lightEmoji);
    div.append(plantImage, iconContainer);
}

function generateGardenGrid() {
    let countRow = 0;
    for (let row of gardenObject.rows) {
        countRow++;
        let countCol = 0;
        for (let box of row) {  //each row is an array, each box an object
            countCol++;
            const div = document.createElement('div');
            // these variable names are a bit tough to read, and it would be hard to maintain this if I were handed this project
            const nRow = countRow - 1;
            const nCol = countCol - 1;
            // if the box was already filled with a plant, load that
            if (box.plant) {
                plantPlant(div, box.plant, nRow, nCol);
            }

            // add event listener for when box is clicked on
            div.addEventListener('click', () => {
                if (plantSelector.value) {
                    // update the state
                    gardenObject.rows[nRow][nCol].plant = plantSelector.value;
                    setGarden(gardenName, gardenObject);
                    gardenObject = getSpecificGarden(gardenName);

                    // update the view
                    plantPlant(div, plantSelector.value, nRow, nCol);
                }
            });
            // append the child
            section.appendChild(div);
        }
    }
}

function createPlantOptions() {
    // nice object iteration!
    for (let plant of Object.values(plants)) {
        const option = document.createElement('option');
        option.value = plant.slug;
        option.textContent = plant.commonName;
        plantSelector.appendChild(option);
    }
}

printButton.addEventListener('click', () => window.print());

chartButton.addEventListener('click', () => window.location = '../chart/');

// initialize page 
renderHeaderNav();
generateGardenGrid();
createPlantOptions();
