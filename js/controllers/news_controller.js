Sistearth.NewsController = Ember.ArrayController.extend({
    actions: {
        createNews: function () {
            var title = this.get('newTitle');
            if (!title.trim()) { return; }

            var news = this.store.createRecord('news', {
                title: title,
                body: "empty"
            });

            this.set('newTitle', '');
            news.save();
        }
    }
});