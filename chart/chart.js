import { renderHeaderNav } from '../dom-utils.js';

renderHeaderNav();

const printButton = document.querySelector('.print-button');

printButton.addEventListener('click', () => {
    window.print();
});