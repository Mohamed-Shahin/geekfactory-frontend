var assert = require('assert');
var objects = require('./Objects');

describe('Objects', function() {
    describe('#createPerson', function() {
        it('should return first name', function() {
            assert.equal('khaled', objects.createPerson('khaled', 'rashad').firstName);
        });

        it('should return last name', function() {
            assert.equal('rashad', objects.createPerson('khaled', 'rashad').lastName);
        });

        it('should return full name', function() {
            assert.equal('khaled rashad', objects.createPerson('khaled', 'rashad').getFullName());
        });
    });

    describe('#Person', function() {
        it('should return first name', function() {
            assert.equal('khaled', (new objects.Person('khaled', 'rashad')).firstName);
        });

        it('should return last name', function() {
            assert.equal('rashad', (new objects.Person('khaled', 'rashad')).lastName);
        });

        it('should return full name', function() {
            assert.equal('khaled rashad', (new objects.Person('khaled', 'rashad')).getFullName());
        });
    });
});