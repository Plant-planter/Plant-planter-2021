import { renderHeaderNav } from '../dom-utils.js';
import { getSpecificGarden, getCurrentGarden } from '../local-storage-utilities.js';
import { generateGrid } from '../utils.js';

renderHeaderNav();
generateGardenGrid();

export function generateGardenGrid() {
    const gardenName = getCurrentGarden();
    const gardenObject = getSpecificGarden(gardenName);

    const section = document.querySelector('.garden-grid');
    let counter = 0;
    for (let row of gardenObject.rows){
        for (let box of row) {  //each row is an array, each box an object
            counter++;
            const div = document.createElement('div');
            div.textContent = `Box${counter}`;
            section.appendChild(div);
        }
    }


}