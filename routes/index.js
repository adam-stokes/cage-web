
/*
 * GET home page.
 */

var request = require('request');

exports.index = function(req, res){
    request('http://localhost:9000/entity/activity', function(err, resp, body) {
	res.render('index', { title: 'CAGE-web actvitiy app.'
			      , activityList: body });
    });
};

exports.addActivity = function(req, res){
    res.send('haiiiii');
};
