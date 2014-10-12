import DS from 'ember-data';

var ApplicationAdapter = DS.FixtureAdapter.extend({
    queryFixtures: function(records, query) {
        return records.filter(function(record) {
            for(var key in query) {
                if (!query.hasOwnProperty(key)) { continue; }
                var value = query[key];
                if (record[key] !== value) { return false; }
            }
            return true;
        });
    }
});

/*var ApplicationAdapter = DS.RESTAdapter.extend({});

 DS.RESTAdapter.reopen({
 host: 'https://api.sistearth.com',
 namespace: 'api',
 pathForType: function(type) {
 if(type === 'post') {
 return 'public/posts';
 } else {
 return type;
 }
 }
 });*/

export default ApplicationAdapter;
