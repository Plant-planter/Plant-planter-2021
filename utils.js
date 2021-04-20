import { getCurrentGarden, getSpecificGarden } from './local-storage-utilities.js';


export function generateGrid(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push({});
        }
        arr.push(row);
    } return arr;
} 

export function getAveragePH() {
    const currentGarden = getCurrentGarden();
    const garden = getSpecificGarden(currentGarden);
    const phMin = 4; //assign this to the garden [object's phMin]
    const phMax = 7; //assign this to the garden [object's phMax]
    const averagePH = (phMin + phMax) / 2;
    return averagePH;
}

export function phToColor(phAverage = 7.5) {
    const phInt = parseInt(phAverage);
    const phDecimal = (phAverage - Math.floor(phAverage)).toFixed(2); //limits decimal to two places
    const lightness = 0;
    const pHColors = {
        4: 'hsl(81,62%,65%)',
        5: 'hsl(94,54%,50%)',
        6: 'hsl(107,52%,43%)',
        7: 'hsl(136,29%,40%)', 
        8: 'hsl(162,36%,51%)'
    };
    console.log(phInt, phDecimal);

} 