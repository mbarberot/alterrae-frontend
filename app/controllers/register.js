import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
default Ember.ObjectController.extend(EmberValidations.Mixin, {
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

    actions: {
        register: function () {
            var user = this.get('model');
            var controller = this;
            user.save().then(function () {
                // todo display a success message before(/after?) redirection
                controller.transitionToRoute('/login');
            }, function () {
                // todo handling errors
            });
        }
    }
});