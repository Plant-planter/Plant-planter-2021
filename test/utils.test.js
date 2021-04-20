// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createGarden } from '../local-storage-utilities.js';
import { generateGrid } from '../utils.js';

const test = QUnit.test;

test('test the createGarden function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        name: undefined,
        avatar: '',
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
