function largestPalindrome() {
    var result = 0;
    for (var i = 100; i <= 999; i++) {
        for (var b = 100; b <= 999; b++) {
            var temp = i * b;
            var tempReversed = parseInt(temp.toString().split('').reverse().join(''));
            if (temp == tempReversed && temp > result) {
                result = temp;
            }
        }
    }
    return result;
}

console.log(largestPalindrome());