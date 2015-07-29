import Ember from "ember";
import {
  test
}
from 'ember-qunit';
import startApp from '../helpers/start-app';
import loginUser from '../helpers/login-user';

var App;
module('Login', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

var snow = {
  username: 'jon@snow.com',
  password: 'jon@snow.com',
  email: 'jon@snow.com'
};

test('Registered user should be able to login', function() {
  expect(1);
  loginUser(snow);
  andThen(function() {
    ok(find('div.alert-success'));
  });
});

test('Logged user should be able to logout', function() {
  expect(1);
  loginUser(snow);
  ok(find('button#logout'));
});
