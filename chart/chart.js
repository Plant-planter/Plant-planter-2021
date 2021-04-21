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
    let harvestChart = new Chart(ctx, {
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

renderHeaderNav();
loadHarvestChart();