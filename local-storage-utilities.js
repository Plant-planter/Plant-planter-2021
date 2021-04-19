const GARDENS = 'GARDENS';

export function getGardens() {
    const gardens = localStorage.getItem(GARDENS);

    // if gardens doesn't exist, create it
    if (!gardens) {
        localStorage.setItem(GARDENS, {});
        return {}
    }

    return JSON.parse(gardens);
}

export function createGarden(name, avatar) {
    const gardens = {
        name: name,
        avatar: avatar,
        location: 'Portland',
        rows: []
    };
    return gardens;
}