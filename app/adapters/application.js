import DS from 'ember-data';

export
default DS.RESTAdapter.extend({
    host: 'https://api.sistearth.com',
    namespace: 'api'
});