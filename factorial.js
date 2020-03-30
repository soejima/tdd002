function factorial(n){
    return n > 0 ? factorial(n-1)*n : 1;
}

module.exports = factorial;