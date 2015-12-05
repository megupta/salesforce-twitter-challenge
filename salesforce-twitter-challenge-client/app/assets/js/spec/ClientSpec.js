describe("Salesforce Twitter Challenge Client", function() {

	describe("Models", function() {

		var mock_user = {

				name: "Salesforce",
				screen_name: "salesforce"
			},
			mock_tweet = {

				text: "test",
				user: new App.Model.User(mock_user)
			},
			tweet = new App.Model.Tweet(mock_tweet);

		describe("Tweet Model", function() {

			it("should return set text", function() {

				expect(tweet.get("text")).not.toEqual(null);
				expect(tweet.get("text")).toEqual(mock_tweet.text);
			});
			it("should return null retweet_count", function() {

				expect(tweet.get("retweet_count")).toEqual(null);
			});
			it("should return set user", function() {

				expect(tweet.get("user")).not.toEqual(null);
			});
		});

		describe("User Model", function() {

			it("should return set name", function() {

				expect(tweet.get("user").get("name")).not.toEqual(null);
				expect(tweet.get("user").get("name")).toEqual(mock_user.name);
			});
			it("should return set screen_name", function() {

				expect(tweet.get("user").get("screen_name")).not.toEqual(null);
				expect(tweet.get("user").get("screen_name")).toEqual(mock_user.screen_name);
			});
			it("should return null profile_image_url", function() {

				expect(tweet.get("user").get("profile_image_url")).toEqual(null);
			});
		});
	});

	describe("Collections", function() {

		describe("Tweet Collection", function() {

			it("should be defined", function() {

				expect(App.Collection.Tweet).toBeDefined();
			});
			it("can be instantiated", function() {

				this.collection = new App.Collection.Tweet();
				expect(this.collection).not.toBeNull();
			});
			it("references the tweet model", function() {

				this.collection = new App.Collection.Tweet();
				expect(this.collection.model).toEqual(App.Model.Tweet);
			});
			it("has the the correct url", function() {

				this.collection = new App.Collection.Tweet();
				expect(this.collection.url).toEqual("statuses/user_timeline");
			});

			describe("fetch", function() {

				beforeEach(function(done) {

					this.collection = new App.Collection.Tweet();
					this.collection.fetch().then(function() {

						done();
					});
				});

				it("returned expected number of models", function(done) {

					expect(this.collection.length).toEqual(10);
					done();
				})
			})

		})
	})
});