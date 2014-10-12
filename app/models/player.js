import DS from "ember-data";

var Player = DS.Model.extend({
    user: DS.belongsTo('user')
});

Player.reopenClass({
    FIXTURES: [
        {
            id: 1,
            user : "1"
        },
        {
            id: 2,
            user: "2"
        },
        {
            id: 3,
            user: "3"
        }
    ]
});

export
    default Player;