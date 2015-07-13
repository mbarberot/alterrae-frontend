import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
default Ember.ObjectController.extend(EmberValidations, {
  validations: {
    email: {
      presence: {
        message: "Champ obligatoire"
      },
      confirmation: {
        message: "Les adresses e-mails ne correspondent pas"
      }
    },
    actualPassword: {
      presence: {
        message: "Entrer votre mot de passe pour valider la modification"
      }
    }
  },

  setErrorMessage: function(field) {
    var message;
    switch (field) {
      case 'email':
        message = "E-mail déjà utilisé";
        break;
      default:
        message = "Une erreur inattendue s'est produite, contactez un administrateur.";
    }
    this.set('errorMessage', message);
  },

  resetFields: function() {
    this.set('successMessage', '');
    this.set('errorMessage', '');
    this.set('email', '');
    this.set('emailConfirmation', '');
    this.set('actualPassword', '');
  },

  actions: {
    update: function() {
      var controller = this;
      var user = this.get('model');
      console.log(user);
      user.save().then(
        function() {
          controller.set('successMessage', "Adresse e-mail changée");
          controller.set('actualPassword', '');
        },
        function(error) {
          controller.resetFields();
          controller.setErrorMessage('foo');
        });
    }
  }
});
