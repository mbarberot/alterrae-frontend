import Ember from "ember";
import {
    test, moduleFor
}
from 'ember-qunit';
import startApp from '../helpers/start-app';
import loginUser from '../helpers/login-user';

var App;
module('Login', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

var snow = {
    username: 'jon@snow.com',
    password: 'jon@snow.com',
    email: 'jon@snow.com'
};

test('Registered user should be able to login', function() {
    expect(2);
    loginUser(snow);
    andThen(function() {
        ok(find('div.alert-success'));
    });
    andThen(function() {
        equal(currentRouteName(), 'game');
    });
});

test('Logged user should be able to logout', function() {
  expect(3);
  ok(find('button#logout'));
  click('button#logout');
  andThen(function() {
    equal(currentRouteName(), 'index');
    equal(currentSession().isAuthenticated, false);
  });
});
