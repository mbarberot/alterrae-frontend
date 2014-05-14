Sistearth.SingleNewsController = Ember.ObjectController.extend({
    actions: {
        editNews: function () {
            this.set('isEditing', true);
        },

        saveNews: function () {
            var title = this.get('title');
            if (!title.trim()) {
                return;
            }

            var news = this.store.createRecord('news', {
                title: title,
                body: "empty"
            });

            news.save();
            this.set('isEditing', false);
        }
    },

    isEditing: false,

    isImportant: function (key, value) {
        var model = this.get('model');
        if (value === undefined) {
            return model.get('isImportant');
        } else {
            model.set('isImportant', value);
            model.save();
            return value;
        }
    }.property('model.isImportant')
});