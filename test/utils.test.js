// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createGarden } from '../local-storage-utilities.js';
import { generateGrid, phToColor } from '../utils.js';
import { getSpecificGarden } from '../local-storage-utilities.js';

const test = QUnit.test;

test('test the createGarden function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        name: undefined,
        avatar: './assets/chicken.png',
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


const stubGardens = {

    testGarden: {
        name: 'testGarden',
        avatar: 'chicken', 
        location: 'portland',
    },

    otherGarden: {
        name: 'otherGarden',
        avatar: 'cow',
        location: 'ny',
    }
};


test('should return a specific garden', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const stringifyGarden = JSON.stringify(stubGardens);

    localStorage.setItem('GARDENS', stringifyGarden);

    const expected = {
        name: 'testGarden',
        avatar: 'chicken', 
        location: 'portland',
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSpecificGarden('testGarden');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return the appropriate hsl color', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const phAverage = 4.75;
    const expected = `hsl(${((phAverage - 4) / 8) * 360}, 50%, 75%)`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = phToColor(4.5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
