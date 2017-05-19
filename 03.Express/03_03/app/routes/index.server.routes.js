// Load the 'index' controller
// root 경로에 따라 처리하는 라우터.
const index = require('../controllers/index.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Mount the 'index' controller's 'render' method
	app.get('/', index.render);
};