
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
