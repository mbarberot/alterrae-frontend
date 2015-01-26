import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function () {
		var userId = this.get('session').get('content')['profile']['id'];
		return this.get('store').find('user', userId);
	}
});