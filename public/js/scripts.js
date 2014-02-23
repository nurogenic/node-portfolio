define(['router'], function(router){
	var initialize = function(){
		var router = router;
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});