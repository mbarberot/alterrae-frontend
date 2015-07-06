import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
  default Ember.Controller.extend(EmberValidations.Mixin, {
  validations: {
    email: {
      presence: {
        message: "Champ obligatoire"
      },
      confirmation: {
        message: "Les adresses e-mails ne correspondent pas"
      }
    },
    password: {
      presence: {
        message: "Entrer votre mot de passe pour valider la modification"
      }
    }
  },

  actions: {
    update: function () {
      var _this = this;
      var user = this.get('model');
      user.set('actualPassword', this.password);
      user.set('email', this.email);
      console.log(user);
      user.save().then(
        function () {
          console.log('ok');
        },
        function (error) {
          console.log(error);
          var message = JSON.parse(error.responseText)['message'];
          _this.set('errorMessage', message);
        });
    }
  }
});
