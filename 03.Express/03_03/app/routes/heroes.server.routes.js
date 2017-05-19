// Load the '/heroes' controller
// /heroes 경로에 따라 처리하는 라우터.
const hereos = require('../controllers/hereos.server.controller');

// Define the routes module' method
module.exports = function(app) {
    // Mount the 'index' controller's 'render' method
    app.get('/heroes', hereos.getHeroes);
};