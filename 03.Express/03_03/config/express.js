// Load the module dependencies
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

// Define the Express configuration method
// 다른 곳에서 쓸 수 있도록 module.exports 에 넣는다.
module.exports = function() {
	// Create a new Express application instance
	const app = express();

	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	// Configure the 'session' middleware
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	// Set the application view engine and 'views' folder
	app.set('views', './app/views'); // views 밑에 있다.
	app.set('view engine', 'ejs'); // ejs 로 하고,

	// Load the 'index' routing file
	// 요청 URL에 따라 답을 달리 하는 Routing 처리를 따로 설정
	require('../app/routes/index.server.routes.js')(app);   // root 요청에 대한 처리 ,  중간에서 require(import) 한다.
	require('../app/routes/heroes.server.routes.js')(app);   // heros 라우터

	// Configure static file serving
	// static 디렉토리를 설정하면 미들웨어를 거치지 않고 그냥 리턴한다.
	app.use(express.static('./public'));
    app.use(express.static('./public/src'));

	// Return the Express application instance
	return app;
};