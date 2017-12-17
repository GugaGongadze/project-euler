function largestPrimeFactor(number) {
    var factors = [];

    for (var delimiter = 2; Math.floor(number / 2) > 1; delimiter++) {
        for (; number % delimiter == 0; number /= delimiter) {
            factors.push(delimiter);
        }
    }

    return factors.reduce(function (a, b) {
        return Math.max(a, b);
    });
}

console.log(largestPrimeFactor(600851475143));