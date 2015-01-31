import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function () {
    var user = this.get('store').createRecord('user');
    return this.get('store').adapterFor(user.constructor).getSelf(user.constructor.typeKey);
	}
});
