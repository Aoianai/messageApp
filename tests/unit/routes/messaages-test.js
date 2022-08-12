import { module, test } from 'qunit';
import { setupTest } from 'message-app/tests/helpers';

module('Unit | Route | messaages', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:messaages');
    assert.ok(route);
  });
});
