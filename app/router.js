import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts');
  this.resource('post', { path: '/posts/:post_id' });
  this.resource('register');
  this.resource('login');
  this.resource('game');
  this.resource('account', function() {
    this.route('change-email');
    this.route('change-password');
    this.route('delete');
  });
  this.resource('create-player');
  this.resource('player');
});

export default Router;
