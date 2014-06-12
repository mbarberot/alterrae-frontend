Sistearth.NewsController = Ember.ObjectController.extend({
    actions: {

    },

    accordionHref: function (key, value) {
        var model = this.get('model');

        if (value == undefined) {
            return "#news-" + model.get('id');
        }
    }.property('model.id'),

    accordionId: function (key, value) {
        var model = this.get('model');

        if (value == undefined) {
            return "news-" + model.get('id');
        }
    }.property('model.id')
});