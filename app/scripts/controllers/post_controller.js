SistearthFrontend.PostController = Ember.ObjectController.extend({
    accordionHref: function (key, value) {
        var model = this.get('model');

        if (value == undefined) {
            return "#post-" + model.get('id');
        }
    }.property('model.id'),

    accordionId: function (key, value) {
        var model = this.get('model');

        if (value == undefined) {
            return "post-" + model.get('id');
        }
    }.property('model.id')
});

