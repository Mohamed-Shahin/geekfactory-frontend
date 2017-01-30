exports.lengthOfLastWord = function(str) {
    var count = 0;
    for (var i = str.length - 1; i > 0; i--) {
        if (str.charAt(i) !== ' ')
            count = count + 1
        else {
            if (count != 0) {
                break;
            }
        }
    }
    return count;
}