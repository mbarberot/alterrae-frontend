import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var SistearthAuthenticator = Base.extend({

  init: function() {},

  restore: function(properties) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.user_token) && !Ember.isEmpty(properties.user_email)) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },

  authenticate: function(credentials) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      console.log(credentials);
      var data = {
        username: credentials.identification,
        password: credentials.password
      };
      _this.makeRequest(data).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  invalidate: function() {
    return Ember.RSVP.resolve();
  },

  makeRequest: function(data) {
    return Ember.$.ajax({
      url: 'https://api.sistearth.com/api/login',
      type: 'POST',
      data: data,
      dataType: 'json',
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('Accept', settings.accepts.json);
      }
    });
  }
});

Ember.Application.initializer({
  name: 'authentication',
  before: 'simple-auth',
  initialize: function(container) {
    container.register('authenticator:sistearth', SistearthAuthenticator);
  }
});

export default SistearthAuthenticator;