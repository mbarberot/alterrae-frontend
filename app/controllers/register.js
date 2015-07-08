import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
default Ember.Controller.extend(EmberValidations.Mixin, {
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
      case 'username': message = "Identifiant déjà utilisé"; break;
      case 'email' : message = "E-mail déjà utilisé"; break;
      default: message = "Une erreur inattendue s'est produite, contactez un administrateur."
    }
    this.set('errorMessage', message);
  },

  actions: {
    register: function() {
      this.set('errorMessage', '');
      var controller = this;
      var user = this.get('model');
      user.set('username', this.username);
      user.set('password', this.password);
      user.set('email', this.email);
      user.save().then(
        function() {
          Ember.$('#successModal')
            .modal('show');
        },
        function(error) {
          controller.setErrorMessage(JSON.parse(error.responseText)['field']);
        });
    }
  }
});
