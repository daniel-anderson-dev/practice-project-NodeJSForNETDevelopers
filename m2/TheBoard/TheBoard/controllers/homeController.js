(function (homeController) {

    var data = require('../data');

    homeController.init = function (app) {
        app.get('/', function (request, response) {
            data.getNoteCategories(function (error, results) {
                response.render('index', { title: 'Express + Vash', error: error, categories: results });
            });
        });
    };

})(module.exports);