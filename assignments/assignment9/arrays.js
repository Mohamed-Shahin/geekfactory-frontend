exports.sum = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}


exports.odds = function(arr) {
    var odd = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) !== 0) {
            odd.push(arr[i]);
        }
    }
    return odd;
}

exports.find = function(arr, x) {
    for (var i = 0; i < arr.length; i++) {
        if (x(arr[i])) {
            return arr[i];
        }
    }

}