import Ember from 'ember';

export default Ember.Component.extend({
  eventbus: Ember.inject.service(),
  formData: null,
  actions: {
    click: function(sent_event_from_hbs) {
      // get the data from the elements of the component
      let o = {};
      this.get("childViews").forEach((v) => { o[v.name] = v.value; } );
      this.set('formData', o);
      // formData is passed through the event bus to component b
      this.get('eventbus').trigger(sent_event_from_hbs, this.get('formData'));
    }
  }
});
