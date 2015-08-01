import Ember from "ember";
import PlayerRouteMixin from '../mixins/player-route-mixin';

var GameRoute = Ember.Route.extend(PlayerRouteMixin, {
//    model: function () {
//        var store = this.get('store');
//        var user = store.find('user');
//        return store.find('player', {userId: user.id});
//    }
});

export default GameRoute;
