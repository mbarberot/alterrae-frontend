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

  actions: {
    delete: function () {
      var controller = this;
      var user = this.get('model');
      user.deleteRecord();
      user.save().then(
        function () {
          console.log('ok');
          controller.set('actualPassword', '');
        },
        function (error) {
          controller.set('errorMessage', "Une erreur inattendue s'est produite, contactez un administrateur.");
          controller.set('actualPassword', '');
        });
    }
  }
});
