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
            var _this = this;
            var user = this.get('model');
            user.save().then(
                function () {
                    Ember.$('#successModal')
                        .modal('show')
                        .on('hidden.bs.modal', function () {
                            _this.transitionToRoute('/login');
                        });
                },
                function (error) {
                    console.log(error);
                    var message = JSON.parse(error.responseText)['message'];
                    _this.set('errorMessage', message);
                });
        }
    }
});