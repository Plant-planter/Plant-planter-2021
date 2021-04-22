import { renderHeaderNav } from '../utils-dom.js';
import { getCurrentGarden, getSpecificGarden } from '../utils-local-storage.js';
import { locations } from '../data/data.js';

// get html dom elements
const city = document.querySelector('.city-name');
const tribeList = document.querySelector('.people-list');

// set up state
const garden = getSpecificGarden(getCurrentGarden());

// define functions
function setCityAndPeoples() {
    // set the city
    city.textContent = garden.location;

    // create the list
    tribeList.innerHTML = '';
    const peoples = locations[garden.location].indigenousPeoples;
    for (let people of Object.keys(peoples)) {
        const anchor = document.createElement('a');
        anchor.textContent = people;
        anchor.href = peoples[people];
        tribeList.appendChild(anchor);

        if (people === Object.keys(peoples)[Object.keys(peoples).length - 2]) {
            tribeList.innerHTML += ', and ';
        } else if (people !== Object.keys(peoples)[Object.keys(peoples).length - 1]) {
            tribeList.innerHTML += ', ';
        }
    } 
}

// initialize page
renderHeaderNav();
setCityAndPeoples();