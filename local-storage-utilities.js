const GARDENS = 'GARDENS';

export function createGarden(name, avatar){
    const gardens = {
        name: name,
        avatar: avatar,
        location: 'Portland',
        rows: []
    };
    return gardens;
}