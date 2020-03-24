function fibonacci(n){
    return( (n>1) ? (fibonacci(n-1)+fibonacci(n-2)) : (n) );
}

module.exports = fibonacci;