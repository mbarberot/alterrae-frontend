import Ember from "ember";
import {
    test, moduleFor
}
from 'ember-qunit';
import startApp from '../helpers/start-app';
import makeUser from '../helpers/make-user';
import registerUser from '../helpers/register-user';
import loginUser from '../helpers/login-user';

var App;
module('Account', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test('account page is accessible for authenticated user', function() {
    expect(1);
    authenticateSession();
    visit('/account');

    andThen(function() {
        equal(currentRouteName(), 'account');
    });
});

test('account page is not accessible for an anonymous user', function() {
    expect(1);
    visit('/account');

    andThen(function() {
        notEqual(currentRouteName(), 'account');
    });
});

var user = makeUser();

test('delete user should ask for password, logout and redirect to home page', function() {
    expect(4);

    registerUser(user);
    andThen(function() {
        loginUser(user);
        andThen(function() {
            visit('/account');
            andThen(function() {
                click('button#delete');
                andThen(function() {
                    equal(find('#modal-password-confirmation').data('bs.modal').isShown, true);
                    fillIn('#modal-password-confirmation .modal-body input', user.password);
                    click('#modal-password-confirmation #confirm-modal');
                    andThen(function() {
                        equal(currentSession().isAuthenticated, false);
                        andThen(function() {
                            equal(currentRouteName(), 'index');
                            loginUser(user);
                            andThen(function() {
                                equal(currentSession().isAuthenticated, false);
                            });
                        });
                    });
                });
            });
        });
    });
});