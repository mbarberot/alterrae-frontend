import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function () {
    // second arg is ignored : see adapters/profile
    return this.get('store').find('user', -1);
  }
});
