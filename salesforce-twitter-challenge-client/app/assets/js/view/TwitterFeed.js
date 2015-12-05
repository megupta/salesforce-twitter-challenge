"use strict";

App.View.TwitterFeed = Backbone.View.extend({

	searchFilter: null,
	tweetList: null,
	containerTemplate: _.template($("#twitterFeedWidget-template").html()),

	initialize: function(){

		this.render();
	},
	render: function() {

		this.$el.html(this.containerTemplate());

		var target = this.$("#twitterFeedWidget-content");
		this.searchFilter = new App.View.SearchFilter({el: target});
		this.tweetList = new App.View.TweetList({el: target});
	},
	events: {

		//"change .searchFilter-input": "filterList",
		"keyup .searchFilter-input": "filterList"
	},
	filterList: function() {

		var searchText = this.$(".searchFilter-input").val();
		this.tweetList.filter(searchText);
	}
});