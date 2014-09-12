import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SistearthFrontendENV.locationType
});

Router.map(function() {
	this.resource('login');
	this.resource('posts');
    this.resource('post', { path: '/posts/:post_id' });
    this.resource('game');
});

export default Router;
