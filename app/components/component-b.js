import Ember from 'ember';

export default Ember.Component.extend({
  eventbus: Ember.inject.service(),
  classNameBindings: 'height',
  height: false,
  data: 'no link yet',
  url: null,

  _listen: function() {
    console.log('started eventbus in b');
    this.get('eventbus').on('xdadjaoiejoj', this, 'toggleHeight');
  }.on('init'),

  toggleHeight: function(data) {
    this.toggleProperty('height');
    console.log('hi', data);
    this.set('data', data.ta);
    this.set('url', data.url);
  }
});
