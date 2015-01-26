import DS from 'ember-data';

export
default DS.RESTAdapter.extend({
    host: 'https://api.sistearth.com',
    namespace: 'api',
    
    // self methods
    getSelf: function() {
    	console.log("getSelf");
    },

    deleteSelf: function() {
    	console.log("deleteSelf");
    },

    changeSelfPassword: function() {
    	console.log("changeSelfPassword");
    },

    changeSelfEmail: function() {
    	console.log("changeSelfEmail");
    }
});