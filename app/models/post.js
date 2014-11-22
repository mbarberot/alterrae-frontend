import Ember from "ember";
import DS from "ember-data";

var Post = DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string'),
    created_at: DS.attr('string'),
    author: DS.belongsTo('user')
});

Post.reopen({
    attributes: function () {
        var model = this;
        return Ember.keys(this.get('data')).map(function (key) {
            return Ember.Object.create({
                model: model,
                key: key,
                valueBinding: 'model.' + key
            });
        });
    }.property()
});

export default Post;