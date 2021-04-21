
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
    return `hsl(${((phAverage - 4) / 8) * 360}, 50%, 75%)`;
} 

export function checkDuplicateName() {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = 'Name taken';
    errorMessage.classList.remove('swing');
    void errorMessage.offsetWidth;
    errorMessage.classList.add('swing');
} 