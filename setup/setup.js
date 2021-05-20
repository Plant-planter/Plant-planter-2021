// import
import { renderHeaderNav } from '../utils-dom.js';
import { getCurrentGarden, getSpecificGarden, setGarden, getGardens, createGarden, setCurrentGarden } from '../utils-local-storage.js';
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
else btnMain.textContent = 'Modify Garden';

function populateLocationSelect() {
    // happy to see object iteration skills being used! y'all really stretched to the upper limits of your toolkit here :-D
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

    // such a nice, concise line. I'd probably like it to be "gardenNames" instead of gardens, since these are strings not objects
    const gardens = Object.keys(getGardens());
    if (formInput !== gardenName) {
        if (gardens.includes(formInput)) {
            warnDuplicateName();
            // I think the value won't return to anywhere from an event handler, so a plain return is more standard
            return;
        }

        // again, this is a confusing signature--this function probably wants to do too much
        setGarden(gardenName, null);
        setCurrentGarden(formInput);
    }

    gardenObj.name = formInput;
    gardenObj.avatar = `./assets/${formRadio}`;
    gardenObj.location = formSelect;
    setGarden(formInput, gardenObj);

    window.location = '../garden/';
});
