import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
  default Ember.ObjectController.extend(EmberValidations, {
  validations: {
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

  actions: {
    delete: function () {
      var controller = this;
      var user = this.get('model');
      user.deleteRecord();
      user.save().then(
        function () {
          console.log('ok');
          controller.set('actualPassword', '');
          controller.set('successMessage', "Compte supprimé");
        },
        function () {
          controller.setErrorMessages('400');
          controller.set('actualPassword', '');
        });
    }
  }
});
