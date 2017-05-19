// Create a new 'render' controller method
// root 요청에 따른 실제 로직 처리
exports.render = function(req, res) {
	// If the session's 'lastVisit' property is set, print it out in the console 
	// if (req.session.lastVisit) {
	// 	console.log(req.session.lastVisit);
	// }

	// Set the session's 'lastVisit' property
	// req.session.lastVisit = new Date();

	// Use the 'response' object to render the 'index' view with a 'title' property
	// index.ejs 가 호출된다. (ejs 확장자가 생략되어 있다)
	// 변수 title에 'Hello World'를 설정했다.
	res.render('index', {
		title: 'Hello World'
	});
};
