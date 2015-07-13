import Ember from "ember";

export
default Ember.Controller.extend({
    accordionHref: Ember.computed('model.id', function() {
        return "#post-" + this.get('model.id');
    }),

    accordionId: Ember.computed('model.id', function() {
        return "post-" + this.get('model.id');
    })
});
