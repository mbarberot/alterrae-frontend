import Ember from 'ember';

export
default Ember.ObjectController.extend({
    checkPassword: function () {
        var password = this.get("password");
        var passwordConfirmation = this.get("passwordConfirmation");
        return password === passwordConfirmation;
    }.property("model.password", "passwordConfirmation"),

    checkEmail: function () {
        var email = this.get("email");
        var emailConfirmation = this.get("emailConfirmation");
        return email === emailConfirmation;
    }.property("model.email", "emailConfirmation"),

    cannotSubmit: function () {
        return !this.get("checkPassword") || !this.get("checkEmail");
    }.property("checkPassword", "checkEmail"),

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