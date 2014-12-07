import Ember from 'ember';

var NavView = Ember.View.extend({
    tagName: 'li',
    classNameBindings: ['active'],

    active: function() {
        return this.get('childViews.firstObject.active');
    }.property('childViews.firstObject.active')
});

export default NavView;