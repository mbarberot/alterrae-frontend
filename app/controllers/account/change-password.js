import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
  default Ember.Controller.extend(EmberValidations.Mixin, {
  validations: {
    password: {
      presence: {
        message: "Champ obligatoire"
      },
      confirmation: {
        message: "Les mots de passes ne correspondent pas"
      },
      length: {
        minimum: 8,
        messages: {
          tooShort: "Le mot de passe doit faire au moins 8 caractères de long"
        }
      }
    },
    actualPassword: {
      presence: {
        message: "Entrer votre mot de passe pour valider la modification"
      }
    }
  },

  actions: {
    update: function () {
      var _this = this;
      var user = this.get('model');
      user.set('password', this.password);
      user.set('actualPassword', this.actualPassword);
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
