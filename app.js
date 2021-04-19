// import functions and grab DOM elements
import { getGardens, createGarden } from './local-storage-utilities.js';
import { renderGarden } from './dom-utils.js';

const gardenList = document.querySelector('.gardens');

createGarden('test_garden', './assets/alchemy-logo.png');
createGarden('test_garden2', './assets/alchemy-logo.png');

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

loadGardens();