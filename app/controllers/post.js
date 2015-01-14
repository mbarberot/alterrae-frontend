import Ember from "ember";

export
default Ember.ObjectController.extend({
    accordionHref: function (key, value) {
        var model = this.get('model');

        if (value === undefined) {
            return "#post-" + model.get('id');
        }
    }.property('model.id'),

    accordionId: function (key, value) {
        var model = this.get('model');

        if (value === undefined) {
            return "post-" + model.get('id');
        }
    }.property('model.id'),

    formattedDate: function (key, value) {
        var model = this.get('model');

        if (value === undefined) {
            return moment(model.get('created_at')).format('LL');
        }
    }.property('model.created_at'),

    authorName: function (key, value) {
        var model = this.get('model');
        if (value === undefined) {
            return model.get('author.username').capitalize();
        }
    }.property('model.author.username')


});