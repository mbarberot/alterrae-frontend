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

test('Should be able to login', function() {
    expect(4);
    loginUser(snow);
    andThen(function() {
        ok(find('div.alert-success'));
    });
    andThen(function() {
        equal(currentRouteName(), 'game');
        equal(currentPath(), 'game');
        equal(currentURL(), '/game');
    });
});