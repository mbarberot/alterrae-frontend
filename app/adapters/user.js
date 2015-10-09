import DS from 'ember-data';

export
default DS.JSONAPIAdapter.extend({
  host: 'https://api.sistearth.com',
  namespace: 'api',

  profileUrl: function() {
    return this.buildURL('user', null, null, 'findAll') + '/profile';
  },

  urlForFind: function(id) {
    var url;
    if (id === '-1') {
      url = this.profileUrl();
    } else {
      url = this._super(...arguments);
    }
    return url;
  },

  urlForUpdateRecord: function() {
    return this.profileUrl();
  },

  urlForDeleteRecord: function() {
    return this.profileUrl();
  },

  deleteRecord: function(store, type, snapshot) {
    var id = snapshot.id;
    var data = {};
    var serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);

    return this.ajax(this.buildURL(type.modelName, id, snapshot, 'deleteRecord'), "DELETE", {
      data: data
    });
  },
});
