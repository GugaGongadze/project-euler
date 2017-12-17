var limit = 4000000;
function fibonacci() {
    var sum = 0, a = 1, b = 1, c;
    for (;b < limit;) {
        if (b % 2 == 0)
            sum += b;
        c = a + b;
        a = b;
        b = c;
    }
    return sum;
}
console.log(fibonacci());
