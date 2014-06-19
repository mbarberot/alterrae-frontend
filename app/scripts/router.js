SistearthFrontend.Router.map(function () {

    this.resource('posts');
    this.resource('post', { path: '/posts/:post_id' });

});
