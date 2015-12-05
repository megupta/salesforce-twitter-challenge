"use strict";

//10 most recent salesforce tweets
//filter field by searching content for input string

//usability
//presentation
//code structure
//testability

//user profile image
//user name
//user screen name @screen_name
//tweet content
//how many times the message was retweeted


var express = require("express"),
	logger = require("morgan"),
	http = require("http"),
	path = require("path"),
	config = require('./config');

var app = express(),
	env = process.env.NODE_ENV || "development",
	publicDirectory = path.join(__dirname, "../salesforce-twitter-challenge-client/");

app.use(logger(":remote-addr :method :url"));
app.set("port", process.env.PORT || config.server.port);
app.use(express.static(publicDirectory.toString()));

app.use("/statuses", require("./routes/statuses"));

var server = http.createServer(app);
server.listen(app.get("port"), function() {
	console.log("http server listening on port %s in %s mode.",  app.get("port"), app.settings.env)
});

