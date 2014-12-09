import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('login');
	this.resource('posts');
    this.resource('post', { path: '/posts/:post_id' });
    this.resource('game');
    this.resource('account');
    this.resource('register');
});

export default Router;
