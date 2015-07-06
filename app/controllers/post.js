import Ember from "ember";

export
default Ember.Controller.extend({
    accordionHref: Ember.computed('model.id', function() {
        return "#post-" + this.get('model.id');
    }),

    accordionId: Ember.computed('model.id', function() {
        return "post-" + this.get('model.id');
    }),

    formattedDate: Ember.computed('model.created_at', function() {
        return moment(this.get('model.created_at')).format('LL');
    })
});