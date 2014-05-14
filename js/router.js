Sistearth.Router.map(function(){
	this.resource('frontpage', { path: '/' });
});

Sistearth.FrontpageRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('news');
	}
});