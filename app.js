// import functions and grab DOM elements
import { getGardens, createGarden } from './local-storage-utilities.js';
import { renderGarden } from './dom-utils.js';

const gardenList = document.querySelector('.gardens');
const form = document.querySelector('form');

// initialize state
function loadGardens() {
    const gardens = getGardens();

    console.log(gardens);

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
        console.log('Name Taken');
        return false;
    }
    createGarden(gardenName);
    window.location = './garden';
});

loadGardens();

