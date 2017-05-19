// Load the '/heroes' controller
// /heroes 경로에 따라 처리하는 라우터.
const hereos = require('../controllers/hereos.server.controller');

// Define the routes module' method
module.exports = function(app) {

    app.get('/heroes', hereos.getHeroes);
    app.post('/heroes', hereos.getNewHeroes);
    //app.put('/heroes', hereos.getHiphopHeroes); // update할때 put 방식으로 요청한다.
};