import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({});

DS.RESTAdapter.reopen({
    host: 'https://api.sistearth.com',
    namespace: 'api/public'
});

export default ApplicationAdapter;
