const GARDENS = 'GARDENS';

export function getGardens() {
    const gardens = localStorage.getItem(GARDENS);

    // if gardens doesn't exist, create it
    if (!gardens) {
        localStorage.setItem(GARDENS, JSON.stringify({}));
        return {};
    }

    const parsed_garden = JSON.parse(gardens)
    return parsed_garden;
}

export function setGarden(name, garden) {
    const gardens = getGardens();
    gardens[name] = garden;

    const stringyGardens = JSON.stringify(gardens);
    localStorage.setItem(GARDENS, stringyGardens);
}

export function getSpecificGarden(gardenName) {
    const gardens = getGardens();

    return gardens[gardenName];
}

export function createGarden(name, avatar) {
    const value = {
        name: name,
        avatar: avatar,
        location: 'Portland',
        rows: []
    };

    setGarden(name, value);

    return value;
}