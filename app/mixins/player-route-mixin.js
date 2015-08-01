import Ember from 'ember';
import Configuration from 'simple-auth/configuration';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Mixin.create(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    var superResult = this._super(transition);

    var roles = this.get(Configuration.sessionPropertyName).get('content').secure.profile.roles;

    if (!roles.contains("ROLE_PLAYER")) {
      console.log("User has no player | roles -> ", roles);
      transition.abort();
      this.transitionTo('/player/create');
    }

    return superResult;
  }
});
