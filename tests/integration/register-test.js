import Ember from "ember";
import {
  test
}
from 'ember-qunit';
import startApp from '../helpers/start-app';
import makeUser from '../helpers/make-user';
import registerUser from '../helpers/register-user';

var App;
module('Register', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

var user = makeUser();

test('Should be able to register', function() {
  expect(4);
  registerUser(user);
  andThen(function() {
    equal(true, find('#successModal').data('bs.modal').isShown);
    click('#successModal .modal-body a');
    andThen(function() {
      equal(currentRouteName(), 'login');
      equal(currentPath(), 'login');
      equal(currentURL(), '/login');
    });
  });
});
