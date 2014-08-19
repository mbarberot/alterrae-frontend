import Ember from "ember";

var PostRoute = Ember.Route.extend({
    model: function (params) {
        return this.get('store').find('post', params.post_id);
    }
});

export default PostRoute;
