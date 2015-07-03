import Ember from 'ember';
import DS from 'ember-data';

export
  default DS.RESTAdapter.extend({
  host: 'https://api.sistearth.com',
  namespace: 'api',

  profileUrl: function() {
    return this.buildURL('user', null, null, 'findAll') + '/profile';
  },

  urlForFind: function(id) {
    var url;
    if(id === '-1') {
      url = this.profileUrl();
      console.log('urlForFind -1 called', url);
    } else {
      url = this._super(...arguments);
      console.log('urlForFind called =>', url);
    }
    return url;
  },

  urlForUpdateRecord: function() {
    console.log('urlForFindRecord called');
    return this.profileUrl();
  }
});
