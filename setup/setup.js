// import
import { renderHeaderNav } from '../dom-utils.js';
import { getCurrentGarden, getSpecificGarden, setGarden, getGardens, createGarden, setCurrentGarden } from '../local-storage-utilities.js';
import { warnDuplicateName } from '../utils.js';
import { locations } from '../data/data.js';

// get html elements
const form = document.querySelector('form');
const inputName = document.getElementById('garden-name');
const btnMain = document.getElementById('button-setup');
const slcLocation = document.querySelector('.location-select');

// set up the state
const gardenName = getCurrentGarden();
let gardenObj = getSpecificGarden(gardenName);

if (!gardenObj) gardenObj = createGarden(gardenName);
else {
    btnMain.textContent = 'Modify Garden';
}

function populateLocationSelect() {
    for (let city of Object.keys(locations)) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        slcLocation.appendChild(option);
    }
}

// set up page and add event listeners
renderHeaderNav();
populateLocationSelect();

inputName.value = gardenName;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formInput = formData.get('garden-name');
    const formSelect = formData.get('location-select');
    const formRadio = formData.get('avatar');

    const gardens = Object.keys(getGardens());
    if (formInput !== gardenName) {
        if (gardens.includes(formInput)) {
            warnDuplicateName();
            return false;
        }
        setGarden(gardenName, null);
        setCurrentGarden(formInput);
    }

    gardenObj.name = formInput;
    gardenObj.avatar = `./assets/${formRadio}`;
    gardenObj.location = formSelect;
    setGarden(formInput, gardenObj);

    window.location = '../garden/';
});



