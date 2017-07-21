var request = require('request');
var base_url = 'http://localhost:3000/';

describe('A test suite for the node application', function() {
    describe('GET /', function() {
        it('Returns a status code of 200', function(done){
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it('returns "this is working"', function(done) {
            request.get(base_url, function(error, response, body) {
                expect(body).toBe('this is working');
                done();
            });
        });
    });
});