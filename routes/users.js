var express = require('express');
var router = express.Router();

/*
 * GET user list
 */
router.get('/userlist', function(req, res) {
	var db = req.db;
	var collection = db.get('filminfo');
	collection.find({}, {}, function(e, docs) {
		res.json(docs);
	});
});


module.exports = router;
