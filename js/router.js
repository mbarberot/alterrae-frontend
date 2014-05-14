Sistearth.Router.map(function(){
	this.resource('news', { path: '/' });
});

Sistearth.NewsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('news');
	}
});