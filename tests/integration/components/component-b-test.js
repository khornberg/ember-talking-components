import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-b', 'Integration | Component | component b', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{component-b}}`);

  assert.equal(this.$("a").text(), 'no link yet');
});
