import DS from "ember-data";

export
default DS.RESTSerializer.extend({
    extractFindAll: function (store, type, payload) {
        var adaptedPosts = [];
        payload.posts.forEach(
            function (item) {
                var post = {};
                post.id = item.id;
                post.title = item.title;
                post.text = item.text;
                post.created_at = item.created_at;

                post.links = {
                    author: item._links.author.href
                };
                adaptedPosts.push(post);
            }
        );
        var payload_posts = {
            posts: adaptedPosts
        };
        
        console.log(payload_posts);
        
        return this._super(store, type, payload_posts);
    }
});