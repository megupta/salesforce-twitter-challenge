App.Model.Tweet = Backbone.Model.extend({

	defaults: {

		user:           App.Model.User,
		text:           null,
		retweet_count:  null
	}
});