import DS from "ember-data";

export
  default DS.RESTSerializer.extend({
  extractFind: function (store, type, payload) {
    var payload_profile = {
      profile: payload.user
    };

    return this._super(store, type, payload_profile);
  }
});
