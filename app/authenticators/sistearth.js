import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export
default Base.extend({

    init: function () {},

    restore: function (properties) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            if (!Ember.isEmpty(properties.user_token) && !Ember.isEmpty(properties.user_email)) {
                resolve(properties);
            } else {
                reject();
            }
        });
    },

    authenticate: function (credentials) {
        var _this = this;
        return new Ember.RSVP.Promise(function (resolve, reject) {
            var data = {
                username: credentials.identification,
                password: credentials.password
            };
            _this.makeRequest(data).then(function (response) {
                Ember.run(function () {
                    resolve(response);
                });
            }, function (xhr) {
                Ember.run(function () {
                    reject(xhr.status);
                });
            });
        });
    },

    invalidate: function () {
        return Ember.RSVP.resolve();
    },

    makeRequest: function (data) {
        return Ember.$.ajax({
            url: 'https://api.sistearth.com/api/login',
            type: 'POST',
            data: data,
            dataType: 'json',
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader('Accept', settings.accepts.json);
            }
        });
    }
});