import Ember from 'ember';
import DS from 'ember-data';

export
  default DS.RESTAdapter.extend({
  host: 'https://api.sistearth.com',
  namespace: 'api/users',

  pathForType: function (type) {
    var camelized = Ember.String.camelize(type);
    return Ember.String.singularize(camelized);
  },

  urlForFind: function () {
    console.log('urlForFind');
    return this.buildURL('profile', null, null, 'findAll');
  }
});
