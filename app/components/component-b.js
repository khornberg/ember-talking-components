import Ember from 'ember';

export default Ember.Component.extend({
  eventbus: Ember.inject.service(),
  data: 'no link yet',
  url: null,

  _listen: function() {
    // a-event is arbitary
    // the value is passed to the component js from the template
    this.get('eventbus').on('a-event', this, 'changeData');
  }.on('init'),

  // data is passed from component a
  changeData: function(data) {
    this.set('data', data.userdata);
    this.set('url', data.url);
  }
});
