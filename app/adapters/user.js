import DS from 'ember-data';

export
  default DS.RESTAdapter.extend({
  host: 'https://api.sistearth.com',
  namespace: 'api',

  // self methods
  getSelf: function (typeKey) {
    return this.ajax(this.buildSelfUrl(typeKey), 'GET');
  },

  deleteSelf: function (record, password) {
    return this.ajax(this.buildSelfUrl(record.constructor.typeKey), "DELETE", {currentPassword: password});
  },

  changeSelfPassword: function () {
  },

  changeSelfEmail: function () {
  },

  buildSelfUrl: function (type) {
    return this.buildURL(type) + "/self";
  }
});
