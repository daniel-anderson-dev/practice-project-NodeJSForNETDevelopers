var message = require('../../message');
var _ = require('../../node_modules/underscore');

describe('Testing the Message Module.', function() {
    it('Has these properties', function(){
        var properties = ['first'];
        properties.forEach(function(property){
            expect(_.has(message, property)).toBeTruthy();
        });
    });
});
