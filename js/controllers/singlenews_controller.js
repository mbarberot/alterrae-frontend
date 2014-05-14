Sistearth.SingleNewsController = Ember.ObjectController.extend({
    actions: {
        editNews: function () {
            this.set('isEditing', true);
        },

        saveNews: function () {
            this.set('isEditing', false);

            if(Ember.isEmpty(this.get('model.title'))) {
                this.send('removeNews');
            } else {
                this.get('model').save();
            }
        },

        removeNews: function() {
            var news = this.get('model');
            news.deleteRecord();
            news.save();
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