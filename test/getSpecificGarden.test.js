import { getSpecificGarden } from '../local-storage-utilities.js';

const test = QUnit.test;

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


test('time to test a function', (expect) => {
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
