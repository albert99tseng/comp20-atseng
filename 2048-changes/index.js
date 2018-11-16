const express = require('express');
var app = new express();
var parseurl = require('parseurl')
var http = require('http');
var bodyParser = require('body-parser'); // Required if we need to use HTTP query or post parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

/* Setup the mongodb database to use */
var mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection.db();
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/submit", function(request, response){

	try {
		var usr = request.body.username;
		var new_scr = request.body.score;
		var scr = parseInt(new_scr);
		var gd = request.body.grid;


			var toInsert = {username: usr,
	                  score: scr,
	                  grid: gd,
	                  created_at: new Date()
	              };

	    	db.collection('scores', function(error, coll) {
	    		if( usr && scr && gd ){
						coll.insert(toInsert, function(error, saved) {
							if (error) {
								console.log("Error: " + error);
								response.send(500);
							}
							else {
								coll.find().sort({score:-1}).limit(10).toArray(function(err, results){
									response.send(results);
									//change to results
								});
							}
						});
					
				}
				else{
					coll.find().sort({score:-1}).limit(10).toArray(function(err, results){
						response.send(results);
						//change to results
					});

				}


			});
	} 

	catch (err) {
		console.log ("Unable to store data from POST request");
	}
});

app.get("/scores.json", function(request,response){
	var person_name = request.param("username");
    response.setHeader('Content-Type', 'application/json');

	db.collection('scores', function(er, collection) {
		collection.find({username: person_name}).sort({score:-1}).toArray(function(err, result) {
			if (!err) {
				response.json(result);
			} else {
				response.send('Whoops, something went terribly wrong!');
			}
		});
	});
});

app.get("/", function(request, response){
	response.set('Content-Type', 'text/html');

	db.collection('scores', function(error, coll) {
		console.log("Error: " + error);
		var indexPage =""; 
				db.collection('scores', function(er, collection) {
					collection.find().sort({score:-1}).toArray(function(err, cursor) {
						if (!err) 
						{
							indexPage += "<!DOCTYPE HTML><html><head><title>2048 Game Center</title></head><body><h1>2048 Game Center</h1><span class=\"subheader\"> Your 2048 progress: </span> <table><tbody><tr><th>User</th><th>Score</th><th>Timestamp</th></tr>";

							for (var count = 0; count < cursor.length; count++) {
								indexPage += "<tr><td>" + cursor[count].username + "</td>";
								indexPage += "<td>" + cursor[count].score + "</td>";
								indexPage += "<td>" + cursor[count].created_at + "</td></tr>";
							}
							indexPage += "</table></body></html>"
							response.send(indexPage);
						} else 
						{
							response.send('<!DOCTYPE HTML><html><head><title>What Did You Feed Me?</title></head><body><h1>Whoops, something went terribly wrong!</h1></body></html>');
						}
					});
				});
	});

});

app.listen(process.env.PORT || 5000);

