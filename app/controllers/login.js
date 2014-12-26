import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import Configuration from 'simple-auth/configuration';

Configuration.routeAfterAuthentication = 'game';

export
default Ember.Controller.extend(LoginControllerMixin, {
    authenticator: 'authenticator:sistearth',
    actions: {
        authenticate: function () {
            var _this = this;
            this._super().then(null, function (error) {
                var message = JSON.parse(error);
                _this.set('errorMessage', message);
            });
        }
    }
});