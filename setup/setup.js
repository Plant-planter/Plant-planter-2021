import { renderHeaderNav } from '../dom-utils.js';
import { getCurrentGarden, getSpecificGarden, setGarden, getGardens } from '../local-storage-utilities.js';
import { checkDuplicateName } from '../utils.js';

renderHeaderNav();

const gardenName = getCurrentGarden();
const gardenObj = getSpecificGarden(gardenName);

const form = document.querySelector('form');

const inputName = document.getElementById('garden-name');

inputName.value = gardenName;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formInput = formData.get('garden-name');
    const formSelect = formData.get('location-select');
    const formRadio = formData.get('avatar');
    const gardens = Object.keys(getGardens());
    if (gardens.includes(gardenName) && formInput !== gardenName) {
        checkDuplicateName(gardenName);
        return false;
    }


    gardenObj.avatar = `./assets/${formRadio}`;
    gardenObj.location = formSelect;

    setGarden(formInput, gardenObj);

    window.location = '../garden/';

});



