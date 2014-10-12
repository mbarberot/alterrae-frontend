import Ember from "ember";
import DS from "ember-data";

var User = DS.Model.extend({
    username: DS.attr('string')
});

User.reopenClass({
    FIXTURES: [
        {
            id: 1,
            username: "admin"
        },
        {
            id: 2,
            username: "Dale"
        },
        {
            id: 3,
            username: "Mel"
        }
    ]
});

export
    default User;