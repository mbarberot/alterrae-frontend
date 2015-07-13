import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
default Ember.ObjectController.extend(EmberValidations, {
  validations: {
    username: {
      presence: {
        message: "Champ obligatoire"
      }
    },
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

  setErrorMessage: function(field) {
    var message;
    switch (field) {
      case 'username':
        message = "Identifiant déjà utilisé";
        break;
      case 'email':
        message = "E-mail déjà utilisé";
        break;
      default:
        message = "Une erreur inattendue s'est produite, contactez un administrateur.";
    }
    this.set('errorMessage', message);
    console.log(message);
  },

  resetFields: function() {
    this.set('model.username', '');
    this.set('model.email', '');
    this.set('model.password', '');
    this.set('emailConfirmation', '');
    this.set('passwordConfirmation', '');
  },

  actions: {
    register: function() {
      var controller = this;

      this.set('errorMessage', '');

      var user = this.get('model');
      user.save().then(
        function() {
          Ember.$('#successModal').modal('show');
        },
        function(error) {
          controller.resetFields();
          controller.setErrorMessage('foo'); // TODO retour serveur JSON API
          console.log("register > ", error);
        }
      );
    }
  }
});
