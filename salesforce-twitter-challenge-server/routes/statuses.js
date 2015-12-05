"use strict";

var express = require("express"),
	twitter = require("twitter"),
	t = require("tcomb-validation");

var router = express.Router(),
	config = require('./../config'),
	models = require("./../models/statuses.js"),
	twitterAPI = new twitter(config.twitterAPICredientials),
	validate = t.validate;

router.get("/user_timeline", function($request, $response) {

	var params = {

		screen_name:    "salesforce",
		count:          10
	};

	twitterAPI.get("statuses/user_timeline", params, function ($error, $tweets, $data) {

			if ($error) {

				$response.status(502).json({status: "error", message: "requesting statuses/user_timeline for " + params.screen_name + " (" + params.count + ")"});
				return false;
			}

			$tweets = $tweets.map(function($tweet) {

				$tweet = new models.Twitter.Tweet($tweet);
				if (!validate($tweet, models.Twitter.Tweet).isValid()) {

					$response.status(502).json({status: "error", message: "invalid tweet model returned"});
					return false;
				}
				return $tweet;
			});

			$response.status(200).json($tweets);
		}
	);
});

module.exports = router;