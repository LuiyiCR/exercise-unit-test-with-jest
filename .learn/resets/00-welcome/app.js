const sum = (a, b) => {
    return a + b; 
};

console.log(sum(7, 3));


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
};

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 1.07 * 156;

    return valueInYen;
};


const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 
    };
    
    module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };