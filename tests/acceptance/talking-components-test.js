import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-talking-components/tests/helpers/start-app';

module('Acceptance | talking components', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('make components talk', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });

  // CSS selector
  click('#send');

  andThen(() => {
    // find is a helper and uses jQuery
    assert.equal(find('a').text(), 'textarea text@!!');
    assert.equal(find('a').attr('href'), 'http://www.google.com');
  });
});
