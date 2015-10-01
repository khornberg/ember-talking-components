import Ember from 'ember';

export default Ember.Component.extend({
  eventbus: Ember.inject.service(),
  actions: {
    click: function(blah) {
      // put this into someplace else in the component
      let o = {};
      this.get("childViews").forEach((v) => { o[v.name] = v.value; } )
      console.log('hi from a', [blah, o]);
      this.get('eventbus').trigger(blah, o);
    }
  }
});
