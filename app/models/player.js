import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  sex: DS.attr('boolean'),
  class: DS.attr('string'),
  user: DS.belongsTo('user'),
  kingdom: DS.attr('string')
});
