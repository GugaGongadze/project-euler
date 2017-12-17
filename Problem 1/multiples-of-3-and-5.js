var limit = 1000;

var filteredList = [];
for (var i = 1; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0)
        filteredList.push(i);
}

var result = filteredList.reduce(function (sum, element) {
    return sum += element;
});
console.log(result);