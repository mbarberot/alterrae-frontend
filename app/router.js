import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SistearthFrontendENV.locationType
});

Router.map(function() {
	this.resource('posts');
    this.resource('post', { path: '/posts/:post_id' });
});

export default Router;
