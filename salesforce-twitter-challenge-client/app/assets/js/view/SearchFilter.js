"use strict";

App.View.SearchFilter = Backbone.View.extend({

	containerTemplate: _.template($("#twitterFeedWidget-searchFilter-template").html()),

	initialize: function(){

		this.render();
	},
	render: function() {

		$(this.el).append(this.containerTemplate());
	}
});