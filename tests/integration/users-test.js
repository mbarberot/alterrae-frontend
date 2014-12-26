import Ember from "ember";
import {
    test, moduleFor
}
from 'ember-qunit';
import startApp from '../helpers/start-app';
import faker from 'faker';

var App;
module('Users', {
    setup: function () {
        App = startApp();
    },
    teardown: function () {
        Ember.run(App, App.destroy);
    }
});

var user = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email()
};

test('Should be able to register', function () {
    expect(4);
    visit('/register');
    fillIn('input#username', user.username);
    fillIn('input#password', user.password);
    fillIn('input#password-confirmation', user.password);
    fillIn('input#email', user.email);
    fillIn('input#email-confirmation', user.email);
    click('button#submit');
    andThen(function () {
        equal(true, find('#successModal').data('bs.modal').isShown);
        click('#successModal .modal-body a');
        andThen(function () {
            equal(currentRouteName(), 'login');
            equal(currentPath(), 'login');
            equal(currentURL(), '/login');
        });
    });
});


test('Should be able to login', function () {
    expect(4);
    visit('/login');
    fillIn('input#identification', user.username);
    fillIn('input#password', user.password);
    click('button#submit');
    andThen(function() {
        ok(find('div.alert-success'));
    });
    andThen(function () {
        equal(currentRouteName(), 'game');
        equal(currentPath(), 'game');
        equal(currentURL(), '/game');
    });
});