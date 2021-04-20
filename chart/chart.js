import { renderHeaderNav } from '../dom-utils.js';
import { plants } from '../data/data.js';

renderHeaderNav();

const plantData = JSON.stringify(plants);

var ctx = document.getElementById('harvestChart').getContext('2d');


const names = [];
const minHarvest = [];
const maxHarvest = [];

for (let booger of plantData) {
    names.push(booger.commonName);
    minHarvest.push(booger.minDaysTilHarvest);
    maxHarvest.push(booger.maxDaysTilHarvest);
}

var harvestChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: name,
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
                backgroundColor: 'lightblue',
                borderColor: 'blue',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});