import DS from 'ember-data';

//var ApplicationAdapter = DS.FixtureAdapter.extend({});
var ApplicationAdapter = DS.RESTAdapter.extend({});

DS.RESTAdapter.reopen({
    host: 'http://api.sistearth.com',
    namespace: 'api/public'
});

export default ApplicationAdapter;
