var base_url = "http://localhost:8080";

describe("Salesforce Twitter Challenge Server", function() {

	describe("GET /", function() {

		var url = "/";

		beforeEach(function(done) {

			var context = this;

			$.ajax(base_url + url).done(function($html){

				context.content = $html;
				done();
			})
		});

		afterEach(function() {

			this.status = 0;
			this.content = null;
		});

		it("returns status code 200", function(done) {

			expect(this.content).toBeDefined();
			done();
		});
	});


	describe("GET /statuses/user_timeline", function() {

		var url = "/statuses/user_timeline";

		beforeEach(function(done) {

			var context = this;

			$.ajax({

				url:        base_url + url,
				dataType:   "html",
				success: function(data, textStatus, xhr) {

					context.content = data;
				},
				complete: function(xhr, textStatus) {

					context.status = xhr.status;
					done();
				}
			});
		});

		afterEach(function() {

			this.status = 0;
			this.content = null;
		});

		it("returns status code 200", function(done) {

			expect(this.status).toEqual(200);
			done();
		});
		it("returns returns json", function(done) {

			var content = null;
			try
			{
				content = JSON.parse(this.content);
			}
			catch(e) {}

			expect(content).not.toBeNull();
			done();
		});
		it("returns expected length", function(done) {

			var content = null;
			try
			{
				content = JSON.parse(this.content);
			}
			catch(e) {}

			expect(content.length).toBe(10);
			done();
		});
	});
});