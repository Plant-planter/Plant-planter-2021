import { renderHeaderNav } from '../dom-utils.js';
import { getCurrentGarden, getSpecificGarden } from '../local-storage-utilities.js';
import { loadHarvestChart, loadTypeChart, loadRegionChart } from './chart-data.js';

// set up state and get dom elements
const printButton = document.querySelector('.print-button');
const gardenData = getSpecificGarden(getCurrentGarden());

renderHeaderNav();
loadHarvestChart(gardenData);
loadTypeChart(gardenData);
loadRegionChart(gardenData);

// load the charts and add event handlers
printButton.addEventListener('click', () => {
    window.print();
});
