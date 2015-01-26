import Ember from 'ember';

export
default Ember.Controller.extend({
    confirmed: false,
    actions: {
        deleteSelf: function () {
            this.set('password', '');
            this.set('confirmed', false);
            var _this = this;
            Ember.$('#modal-password-confirmation').modal('show')
                .on('hidden.bs.modal', function () {
                    if (_this.get('confirmed')) {
                        _this.adapter().deleteSelf();
                        _this.get('session').invalidate();
                    }
                });
        },
        confirmPassword: function () {
            this.set('confirmed', true);
        }
    },

    // API ''/users/self'' workaround
    adapter: function() {
        return this.get('store').adapterFor(this.get('model').constructor);
    }
});