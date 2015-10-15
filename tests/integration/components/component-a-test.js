import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-a', 'Integration | Component | component a', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{component-a}}`);

  assert.equal(this.$("[name='url']").val().trim(), 'http://www.google.com');
  assert.equal(this.$("[name='userdata']").val().trim(), 'textarea text@!!');

});
