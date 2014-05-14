Sistearth.EditNewsView = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
    }
});

Ember.Handlebars.helper('edit-news', Sistearth.EditNewsView);