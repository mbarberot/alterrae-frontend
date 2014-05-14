Sistearth.Router.map(function(){
	this.resource('index', { path: '/' });
});

Sistearth.IndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('news');
	}
});