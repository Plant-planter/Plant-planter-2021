import { generateGrid } from './utils.js';

const GARDENS = 'GARDENS';
const CURRENTGARDEN = 'CURRENTGARDEN';

export function getGardens() {
    const gardens = localStorage.getItem(GARDENS);

    // if gardens doesn't exist, create it
    if (!gardens) {
        localStorage.setItem(GARDENS, JSON.stringify({}));
        return {};
    }
    return JSON.parse(gardens);
}

export function setGarden(name, garden) {
    const gardens = getGardens();
    if (garden) gardens[name] = garden;
    else delete gardens[name];

    localStorage.setItem(GARDENS, JSON.stringify(gardens));
}

export function setGardens(gardens) {
    localStorage.setItem(GARDENS, JSON.stringify(gardens));
}

export function getSpecificGarden(gardenName) {
    const gardens = getGardens();

    return gardens[gardenName];
}

export function createGarden(name) {
    const value = {
        name: name,
        avatar: './assets/chicken.png',
        location: 'Portland',
        rows: generateGrid(5)
    };

    return value;
}

export function setCurrentGarden(gardenName) {
    localStorage.setItem(CURRENTGARDEN, gardenName);
}

export function getCurrentGarden() {
    return localStorage.getItem(CURRENTGARDEN);
}
