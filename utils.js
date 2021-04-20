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
    console.log(averagePH);
}