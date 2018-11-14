//use express
var express = require('express')
var app = new express()

app.post("/submit", function(request, response){
	response.send("[]");
});

app.get("/scores.json", function(request,response){
	var username = request.query.username;
	response.send({"result": "You typed in" + username});
});

app.get("/", function(request, response){
	response.send("Go away!");

});


//using heroku port 
app.listen(process.env.PORT || 8000);