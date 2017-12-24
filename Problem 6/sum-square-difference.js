function sumOfSquares(num) {
    var res = 0;
    for (var i = 1; i <= num; i++) {
        res += i * i;
    }
    return res;
}

function squareOfSums(num) {
    var res = 0;
    for (var i = 1; i <= num; i++) {
        res += i;
    }
    return res * res;
}

console.log(squareOfSums(100) - sumOfSquares(100));