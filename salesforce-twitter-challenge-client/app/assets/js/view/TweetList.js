"use strict";

App.View.TweetList = Backbone.View.extend({

	collection: new App.Collection.Tweet(),
	collectionServer: null,
	collectionLength: -1,
	containerTemplate: _.template($("#twitterFeedWidget-tweetList-template").html()),
	itemTemplate: _.template($("#twitterFeedWidget-tweetList-item-template").html()),
	searchTerm: null,

	initialize: function(){

		var modified = false,
			context = this;

		this.render();
		this.listenTo(this.collection, "all", function($event) {

			if ($event === "reset") {

				context.refresh();
			}
			else if ($event === "request") {

				modified = false;
			}
			else if ($event === "add" || $event === "remove") {

				modified = true;
			}
			else if (modified && $event === "sync") {

				context.collectionServer = new Backbone.Collection(context.collection.toJSON());
				context.refresh();
				context.filter(context.searchTerm);
			}
		});
		this.fetch();

		//Update once a minute
		setInterval(function() {
			context.fetch();
		}, 60000);
	},
	fetch: function() {

		this.collection.fetch();
	},
	render: function() {

		$(this.el).append(this.containerTemplate());
	},
	refresh: function() {

		var context = this,
			target = this.$("#tweetList");

		if (context.collection.length > 0) {

			target.empty();
			context.collection.each(function ($model) {

				//TODO: $model.text() Convert links, hashtags, and usernames to clickable links
				target.append(context.itemTemplate($model.toJSON())); //TODO: Refactor to single dom append
			});
		}
		//If 0 or less, but not the same size before update the no results message
		else if (this.collectionLength !== context.collection.length) {

			var message = "No results match your search terms. Please refine your search and try again.";

			target.empty();
			target.append("<li class='tweetItem-no-results'><div>" + message + "</div></li>");
		}
		this.collectionLength = context.collection.length;
	},
	filter: function($filterBy) {

		var context = this;

		this.searchTerm = $filterBy ? $filterBy.toLowerCase() : "";
		var filteredModels = this.collectionServer.filter(function($model) {
			return $model.get("text").toLowerCase().indexOf(context.searchTerm) > -1;
		});
		this.collection.reset(filteredModels);
	}
});