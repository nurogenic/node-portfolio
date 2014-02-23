define( ['views/index', 'views/catalog'], function( IndexView, catalogView ){
	var SocialRouter = Backbone.Router.extend({
		
		currentView: null,

		routes: {
			"": "index",
			"catalog" : "catalog"
		},

		changeView: function (view) {
			if( this.currentView != null ) {
				this.currentView.undelegateEvents();
			}
			this.currentView = view;
			this.currentView.render();
		},

		index: function() {
			this.changeView( IndexView );
		},

		catalog: function(){
			this.changeView( catalogView );
		}
	});

	return new SocialRouter();
});