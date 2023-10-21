const { sum } = require('./app.js');

test ('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("One dollar should be 167.455 yens", function(){
const { fromDollarToYen } = require('./app.js');

const yens = fromDollarToYen(3.5);

const expected = 167.455 * 3.5;

expect(fromDollarToYen(3.5)).toBe(586.0925); // 1 euro is 156.5 yens, so 156.5 yens should be = (156.5 * 1.07)
});

test("One yen should be 1/156.5 * 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds =  fromYenToPound(300);

    const expected = 1/156.5 * 0.87 * 300;

    expect(fromYenToPound(300)).toBe(1.673076923076923); //1 euro is 156.5 yens and 0.87 pounds, so 1 pound shoul be (1/156 * 0.87)
});
