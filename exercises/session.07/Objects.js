exports.createPerson = function(first, last) {
    let person = {
        firstName: first,
        lastName: last,
        getFullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }
    return person;
}

exports.Person = function(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    }
}