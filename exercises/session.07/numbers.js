exports.add = function(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    }
}
exports.addStrings = function(a, b) {
    return exports.add(parseFloat(a), parseFloat(b))
}