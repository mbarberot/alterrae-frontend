import Ember from 'ember';
import EmberValidations from 'ember-validations';

export
default Ember.ObjectController.extend(EmberValidations, {
  sexValues: [{
    id: 'male',
    label: 'Homme'
  }, {
    id: 'female',
    label: 'Femme'
  }],
  kingdomValues: [{
    id: 'mizu',
    label: 'Mizu'
  }, {
    id: 'reikon',
    label: 'Reikon'
  }, {
    id: 'seizon',
    label: 'Seizon'
  }, {
    id: 'tsuchi',
    label: 'Tsuchi'
  }],
  classValues: [{
    id: 'hunter',
    label: 'Archer'
  },{
    id:'knight',
    label: 'Chevalier'
  }, {
    id:'mage',
    label: 'Mage'
  }, {
    id: 'wizard',
    label: 'Sorcier'
  }
  ],
  validations: {
    name: {
      presence: {
        message: "Champ obligatoire"
      }
    },
    sex: {
      presence: {
        message: "Champ obligatoire"
      }
    },
    kingdom: {
      presence: {
        message: "Champ obligatoire"
      }
    },
    class: {
      presence: {
        message: "Champ obligatoire"
      }
    },
  },
  actions: {
    "create-player": function() {
      var player = this.get('model');
      console.log("create-player > model", player);
      // player.save().then(
      //   function() {
      //     console.log('ok');
      //   },
      //   function(error) {
      //     console.log('ko', error);
      //   }
      // );
    }
  }
});
