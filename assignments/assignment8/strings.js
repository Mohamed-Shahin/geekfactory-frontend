exports.lengthOfLastWord = function(str) {
    // define counter
    var count = 0;
    for (var i = str.length - 1; i > 0; i--) {
        // check char is space or not 
        if (str.charAt(i) !== ' ')
        // if char isn't space, counter + 1 
            count = count + 1
        else {
            // if the char is space then
            // check counter value if counter value is zero that means last word is not counted yet
            // if counter isn't zero that means the last word is counted
            if (count != 0) {
                break;
            }
        }
    }
    return count;
}