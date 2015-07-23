import Ember from "ember";
import {
  test
}
from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;
module('Posts', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test('Should have a post', function() {
  visit('/posts').then(function() {
    ok(find('div#posts ul li').length > 0);
  });
});

test('Should have a post one', function() {
  visit('/posts/1').then(function() {
    ok(find('div#post h1').text());
    ok(find('div#post p#post-body').text());
  });
});
