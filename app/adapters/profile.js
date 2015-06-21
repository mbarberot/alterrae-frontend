import DS from 'ember-data';

export
  default DS.RESTAdapter.extend({
  host: 'https://api.sistearth.com',
  namespace: 'api/users',

  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return Ember.String.singularize(camelized);
  },

  getProfile: function() {
    return this.ajax(this.buildURL('profile', null, null, 'findAll'), 'GET');
  }
});
