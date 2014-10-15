import Ember from 'ember';

export
default Ember.ObjectController.extend({
    errorPassword: false,
    errorEmail: false,
    actions: {
        register: function () {
            var username = this.get('username'); // pourquoi ?!
            var password = this.get('password');
            var passwordConfirmation = this.get('passwordConfirmation');
            var email = this.get('email');
            var emailConfirmation = this.get('emailConfirmation');
            this.errorPassword = (password !== passwordConfirmation);
            this.errorEmail = (email !== emailConfirmation);
            if (!this.errorEmail && !this.errorPassword) {
                var user = this.model;
                console.log(user);
                console.log(user.email);
                user.save();
            }
        }
    }
});