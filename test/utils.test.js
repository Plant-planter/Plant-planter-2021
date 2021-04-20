// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createGarden } from '../local-storage-utilities.js';
import { generateGrid, phToColor } from '../utils.js';

const test = QUnit.test;

test('test the createGarden function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        name: undefined,
        avatar: '../assets/chicken.png',
        location: 'Portland',
        rows: generateGrid(5), 
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createGarden();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return an accurate ph hsla color', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'hsl(136,29%,40%)';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = phToColor(7.0, 7.7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
