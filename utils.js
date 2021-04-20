
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

export function phToColor(phMin, phMax) {
    const phAverage = (phMin + phMax) / 2;
    return `hsl(${((phAverage - 4)/8) * 360}, 50%, 75%)`;
    /*
    const phInt = parseInt(phAverage); //this removes the decimal places and return a true int, if needed
    const phColors = [
        'hsl(81,62%,65%)',
        'hsl(94,54%,50%)',
        'hsl(107,52%,43%)',
        'hsl(136,29%,40%)', 
        'hsl(162,36%,51%)'
    ];
    // this is the code/algorithm we were using to try and make a dynamic color range. Needs adjusting
    // const lightness = (phAverage - Math.floor(phAverage)).toFixed(2) * 100; //limits decimal to two places
    // const tempHue = (phAverage - 4) / 8; //create a value from 0 to 1
    // const phHue = 80 + (tempHue * (80));
    // console.log(`hsl(${phHue}, 50%, ${lightness}%)`);
    
    return phColors[phInt - 4]; 
    */
} 
