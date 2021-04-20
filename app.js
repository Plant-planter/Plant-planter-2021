// import functions and grab DOM elements
import { getGardens, createGarden, setCurrentGarden } from './local-storage-utilities.js';
import { renderGarden } from './dom-utils.js';
import { getAveragePH, phToColor } from './utils.js'


const gardenList = document.querySelector('.gardens');
const form = document.querySelector('form');
const errorMessage = document.querySelector('.error-message');

// initialize state
function loadGardens() {
    const gardens = getGardens();

    // render the gardens and add them to page
    for (let garden of Object.values(gardens)) {
        const gardenDiv = renderGarden(garden);
        gardenList.appendChild(gardenDiv);
    }
}

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    // calls createGarden, sets window location
    e.preventDefault();
    const formData = new FormData(form);
    const gardenName = formData.get('garden-name');
    const gardens = Object.keys(getGardens());
    if (gardens.includes(gardenName)) {
        errorMessage.textContent = 'Name taken';
        errorMessage.classList.add('swing');
        return false;
    }

    createGarden(gardenName);

    setCurrentGarden(gardenName);

    window.location = './setup/';
});

loadGardens();

phToColor();