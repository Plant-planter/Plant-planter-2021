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
    const plantTimes = [];
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
                    const plantDate = 15 + Math.round(plant.bestMonthToPlant * 30.42);
                    const minDate = Math.min(plant.minDaysTillHarvest, 364);
                    const maxDate = Math.min(plant.maxDaysTillHarvest, 365);
                    plantTimes.push([plantDate - 15, plantDate + 15]);
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
            datasets: [
                {
                    label: 'Planting Time',
                    data: plantTimes,
                    backgroundColor: 'antiquewhite',
                    borderColor: 'black',
                    borderWidth: 1,
                },
                {
                    label: 'Harvest Time',
                    data: harvestTimes,
                    backgroundColor: 'burlywood',
                    borderColor: 'black',
                    borderWidth: 1,
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                }
            },
            plugins: {
                legend: {
                    display: true,
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
                    borderColor: 'black',
                    borderWidth: 1
                }
            ]
        }
    });
}

renderHeaderNav();
loadHarvestChart();
loadTypeChart();


