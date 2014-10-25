import Ember from 'ember';

export
default Ember.Controller.extend({
    errorPassword: false,
    errorEmail: false,
    actions: {
        register: function () {
            var username = this.get('username');
            var password = this.get('password');
            var passwordConfirmation = this.get('passwordConfirmation');
            var email = this.get('email');
            var emailConfirmation = this.get('emailConfirmation');
            this.errorPassword = (password !== passwordConfirmation);
            this.errorEmail = (email !== emailConfirmation);
            if (!this.errorEmail && !this.errorPassword) {
                var user = this.store.createRecord('user', {
                    username: username,
                    password: password,
                    email:email
                });
                console.log(user);
                user.save();
            }
        }
    }
});