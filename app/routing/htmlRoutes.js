var path = require('path');

// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page. 
// Export HTML routes
module.exports = function (app) {
    // console.log('___ENTER htmlRoutes.js___');

    // Home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/home', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    // Survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};
