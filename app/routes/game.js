import Ember from "ember";
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

var GameRoute = Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function () {
        var store = this.get('store');
        var user = store.find('user');
        return store.find('player', {userId: user.id});
    }
});

export default GameRoute;
