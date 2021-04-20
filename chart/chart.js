import { renderHeaderNav } from '../dom-utils.js';
import { plants } from '../data/data.js';
import { getCurrentGarden, getSpecificGarden } from '../local-storage-utilities.js';

renderHeaderNav();



const gardenData = getSpecificGarden(getCurrentGarden());

var ctx = document.getElementById('harvestChart').getContext('2d');

const names = [];
const minHarvest = [];
const maxHarvest = [];


for (let row of gardenData.rows) {
    for (let box of row) {
        const plantId = box.plant;
        if (plantId) {
            const plant = plants[plantId];
            if (!names.includes(plant.commonName)) {
                names.push(plant.commonName);
                minHarvest.push(plant.minDaysTillHarvest);
                maxHarvest.push(plant.maxDaysTillHarvest);
            }
        }
    }
}

var harvestChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Minimum days til harvest',
                data: minHarvest,
                backgroundColor: 'lightpink',
                borderColor: 'magenta',
                borderWidth: 1

            },
            {
                label: 'Maximum days til harvest',
                data: maxHarvest,
                backgroundColor: 'lightgreen',
                borderColor: 'green',
                borderWidth: 1
            }
        ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    }
});