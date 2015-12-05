App.Collection.Tweet = Backbone.Collection.extend({

	model:      App.Model.Tweet,
	url:        "statuses/user_timeline",

	parse: function ($response) {

		return $response;
	}
});