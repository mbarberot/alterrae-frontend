import Ember from "ember";

var IndexRoute = Ember.Route.extend({
    model: function () {
        return this.get('store').find('post');
    }
});

export default IndexRoute;
