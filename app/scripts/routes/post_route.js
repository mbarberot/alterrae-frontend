SistearthFrontend.PostRoute = Ember.Route.extend({
    model: function (params) {
        return this.get('store').find('post', params.post_id);
    }
});
