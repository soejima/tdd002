const factorial = require('./factorial');

function combination(n, p){
    return ( (factorial(n)*factorial(n-p))/factorial(p) );
}

module.exports = combination;