import { renderHeaderNav } from '../dom-utils.js';
import { plants } from '../data/data.js';
import { getCurrentGarden, getSpecificGarden } from '../local-storage-utilities.js';

// set up state and get dom elements
const printButton = document.querySelector('.print-button');
const gardenData = getSpecificGarden(getCurrentGarden());

// define functions
function loadHarvestChart() {
    const ctx = document.getElementById('harvestChart').getContext('2d');
    
    // fill up data arrays
    const names = [];
    const harvestTimes = [];
    const colors = [];
    
    for (let row of gardenData.rows) {
        for (let box of row) {
            const plantId = box.plant;
            if (plantId) {
                const plant = plants[plantId];
                if (!names.includes(plant.commonName)) {
                    names.push(plant.commonName);
                    colors.push(plant.flowerColor);
                    const minDate = Math.min(plant.bestMonthToPlant * 12 + plant.minDaysTillHarvest, 364);
                    const maxDate = Math.min(plant.bestMonthToPlant * 12 + plant.maxDaysTillHarvest, 365);
                    harvestTimes.push([minDate, maxDate]);
                }
            }
        }
    }
    
    // make the chart
    let harvestChart = new Chart(ctx, { //eslint-disable-line
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'Harvest Time',
                data: harvestTimes,
                backgroundColor: colors,
                borderColor: 'green',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        stepSize: 30.4,
                        max: 365
                    }
                }]
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 0
                    }
                }
            }
        }
    });
}

// load the charts and add event handlers
printButton.addEventListener('click', () => {
    window.print();
});


function loadTypeChart() {
    const pieTypeChart = document.getElementById('typeChart').getContext('2d');
    
    // fill up data arrays
    const habits = {};
    
    for (let row of gardenData.rows) {
        for (let box of row) {
            const plantId = box.plant;
            if (plantId) {
                const plant = plants[plantId];
                for (let habit of plant.habits) {
                    if (habits[habit]) {
                        habits[habit]++;
                    } else {
                        habits[habit] = 1;
                    }
                }
            }
        }
    }
    // make the chart
    var typeChart = new Chart(pieTypeChart, { //eslint-disable-line
        type: 'pie',
        data: {
            labels: Object.keys(habits),
            datasets: [
                {
                    label: 'Type',
                    data: Object.values(habits),
                    backgroundColor: [
                        '#AAD6E1',
                        '#FDFAE5',
                        '#D1E9EF',
                        '#FFE9E8',
                        '#758F9E',
                        '#E0DDC7'
                    ],
                    borderColor: 'green',
                    borderWidth: 1
                }
            ]
        }
    });
}

renderHeaderNav();
loadHarvestChart();
loadTypeChart();


