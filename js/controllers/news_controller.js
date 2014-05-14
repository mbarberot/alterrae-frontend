Sistearth.NewsController = Ember.ArrayController.extend({
    importantNewsAmount: function () {
        return this.filterBy('isImportant', true).get('length');
    }.property('@each.isImportant')
});