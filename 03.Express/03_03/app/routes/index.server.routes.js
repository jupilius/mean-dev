// Load the 'index' controller
// 여기서 경로에 따라 처리하면 된다.
const index = require('../controllers/index.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Mount the 'index' controller's 'render' method
	app.get('/', index.render);
};