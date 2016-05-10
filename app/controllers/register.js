import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
default Ember.Controller.extend(EmberValidations, {
  validations: {
    'model.username': {
      presence: {
        message: "Champ obligatoire"
      }
    },
    'model.email': {
      presence: {
        message: "Champ obligatoire"
      },
      confirmation: {
        message: "Les adresses e-mails ne correspondent pas"
      }
    },
    'model.password': {
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
    }
  },

  setErrorMessages: function(errors) {
    var messages = [];
    errors.forEach(function(error) {
      var message;
      switch (error.title) {
        case 'username':
          message = "Identifiant déjà utilisé";
          break;
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
    this.set('model.username', '');
    this.set('model.email', '');
    this.set('model.password', '');
    this.set('emailConfirmation', '');
    this.set('passwordConfirmation', '');
    this.set('errorMessages', []);
  },

  actions: {
    register: function() {
      var controller = this;
      var user = this.get('model');
      user.save().then(
        function() {
          Ember.$('#successModal').modal('show');
        },
        function(error) {
          controller.resetFields();
          controller.setErrorMessages(error.errors);
        }
      );
    }
  }
});
