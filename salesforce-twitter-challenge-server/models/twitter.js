var t = require("tcomb");

var User = t.struct({

	name:                   t.Str,          // string type
	screen_name:            t.Str,
	profile_image_url:      t.Str
});

var Tweet = t.struct({

	id:             t.Num,
	user:           User,
	text:           t.Str,
	retweet_count:  t.Num
});

module.exports = {

	User:		User,
	Tweet:		Tweet
};