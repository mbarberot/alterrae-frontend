SistearthFrontend.PostsRoute = Ember.Route.extend({
    model: function () {
        return this.get('store').find('post');
    }
});
