exports.isUpperCase = function(str) {
    if (typeof str == 'string') {
        if (str.toUpperCase() === str) {
            return true;
        } else {
            return false;
        }
    }
}

exports.camelCase = function(str) {
    var s = "";
    if (typeof str == 'string') {
        for (var i = 0; i < str.length; i++) {
            if (exports.isUpperCase(str.charAt(i))) {
                s = s + " " + str.charAt(i).toLowerCase();
            } else {
                s = s + str.charAt(i);
            }

        }
    }
    return s;
}