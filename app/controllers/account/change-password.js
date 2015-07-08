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
      this.set('successMessage', '');
      this.set('errorMessage', '');
      var controller = this;
      var user = this.get('model');
      user.set('password', this.password);
      user.set('actualPassword', this.actualPassword);
      console.log(user);
      user.save().then(
        function () {
          controller.set('successMessage', "Mot de passe changé");
        },
        function (error) {
          if(error.status == 500) {
              controller.set('errorMessage', "Une erreur inattendue s'est produite, contactez un administrateur.");
          } else if(error.status == 400) {
              controller.set('errorMessage', "Mauvais mot de passe actuel");
          }

        });
    }
  }
});
