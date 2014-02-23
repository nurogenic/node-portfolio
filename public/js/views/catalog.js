define(['text!templates/catalog.html'], function ( catalogTemplate ) {
	var catalogView = Backbone.View.extend({
		el: $('#content'),

		render: function(){
			this.$el.html( catalogTemplate );
		}
	});

	return new catalogView();
});