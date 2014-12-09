import Ember from 'ember';

export
default Ember.Controller.extend({
    confirmed: false,
    actions: {
        delete: function () {
            this.set('password', '');
            this.set('confirmed', false);
            var _this = this;
            Ember.$('#passwordModal').modal('show')
                .on('hidden.bs.modal', function () {
                    if (_this.get('confirmed')) {
                        //todo ajax request
                    }
                });
        },
        confirm: function () {       
            this.set('confirmed', true);
        }
    }
});