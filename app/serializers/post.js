import DS from "ember-data";

export
default DS.RESTSerializer.extend({
    extractFindAll: function (store, type, payload) {
        var posts = [];
        payload.posts.forEach(
            function (item) {
                var post = {};
                post.id = item.id;
                post.text = item.text;
                post.created_at = item.created_at;

                post.links = {
                    author: item._links.author.href
                };
                console.log(post);
                posts.push(post);
                console.log(post);
            }
        );
        var payload_posts = {
            posts: posts
        };
        return this._super(store, type, payload);
    }
});