import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
  default Ember.ObjectController.extend(EmberValidations, {
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

  setErrorMessages: function(status) {
    var message;
    switch(status) {
        case '400' :
          message = "Mot de passe erroné.";
          break;
        default:
          message = "Une erreur inattendue s'est produite, contactez un administrateur.";
    }
    this.set('errorMessages', [message]);
  },

  resetFields: function() {
    this.set('successMessage', '');
    this.set('errorMessages', []);
    this.set('password', '');
    this.set('passwordConfirmation', '');
    this.set('actualPassword', '');
  },

  actions: {
    update: function () {
      var controller = this;
      var user = this.get('model');
      user.save().then(
        function () {
          controller.set('successMessage', "Mot de passe changé");
          controller.set('actualPassword', '');
        },
        function (error) {
          controller.resetFields();
          controller.setErrorMessages('400');
        });
    }
  }
});
