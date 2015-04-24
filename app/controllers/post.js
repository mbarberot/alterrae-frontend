import Ember from "ember";

export
  default Ember.Controller.extend({
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
  }.property('model.created_at')
});
