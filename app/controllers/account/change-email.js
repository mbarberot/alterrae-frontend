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

  actions: {
    update: function() {
      var controller = this;
      var user = this.get('model');
      user.set('actualPassword', this.password);
      user.set('email', this.email);
      console.log(user);
      user.save().then(
        function() {
          controller.set('successMessage', "Adresse e-mail changée");
        },
        function(error) {
          controller.setErrorMessage(JSON.parse(error.responseText)['field']);
        });
    }
  }
});
