import DS from "ember-data";

export
default DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string'),
    created_at: DS.attr('string'),
    author: DS.belongsTo('user', {
        async: true
    })
});