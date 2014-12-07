import DS from "ember-data";

var Player = DS.Model.extend({
    sex: DS.attr('boolean'),
    user: DS.belongsTo('user'),
    kingdom: DS.attr('string')
});

Player.reopenClass({
    FIXTURES: [
        {
            id: 1,
            user : "1",
            sex: true,
            kingdom: "Mizu"
        },
        {
            id: 2,
            user: "2",
            sex: false,
            kingdom: "Tsuchi"
        },
        {
            id: 3,
            user: "3",
            sex: false,
            kingdom: "Reikon"
        }
    ]
});

export
    default Player;