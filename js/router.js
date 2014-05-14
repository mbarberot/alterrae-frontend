Sistearth.Router.map(function(){
	this.resource('news', { path: '/' }, function() {
        this.route('important');
    });
});

Sistearth.NewsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('news');
	}
});

Sistearth.NewsIndexRoute = Ember.Route.extend({
   model: function() {
       return this.modelFor('news');
   }
});

Sistearth.NewsImportantRoute = Ember.Route.extend({
    model: function() {
        return this.store.filter('news', function(news) {
            return news.get('isImportant');
        });
    },

    renderTemplate: function(controller) {
        this.render('news/index', {controller: controller});
    }
});