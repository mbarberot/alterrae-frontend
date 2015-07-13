import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export
  default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:token',
  actions: {
    authenticate: function () {
      var controller = this;
      this._super().then(null, function (error) {
        controller.set('errorMessage', true);
      });
    }
  }
});
