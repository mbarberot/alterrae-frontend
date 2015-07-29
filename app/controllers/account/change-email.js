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

  setErrorMessages: function(errors) {
    var messages = [];
    errors.forEach(function(error) {
      var message;
      switch (error.title) {
        case 'email':
          message = "E-mail déjà utilisé";
          break;
        default:
          message = "Une erreur inattendue s'est produite, contactez un administrateur.";
      }
      messages.push(message);
    });
    this.set('errorMessages', messages);
  },

  resetFields: function() {
    this.set('successMessage', '');
    this.set('errorMessages', []);
    this.set('email', '');
    this.set('emailConfirmation', '');
    this.set('actualPassword', '');
  },

  actions: {
    update: function() {
      var controller = this;
      var user = this.get('model');
      user.save().then(
        function() {
          controller.set('successMessage', "Adresse e-mail changée");
          controller.set('actualPassword', '');
        },
        function(error) {
          controller.resetFields();
          controller.setErrorMessages(error.errors);
        });
    }
  }
});
