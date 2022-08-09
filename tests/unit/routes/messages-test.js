import { module, test } from 'qunit';
import { setupTest } from 'messageme/tests/helpers';

module('Unit | Route | messages', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:messages');
    assert.ok(route);
  });
});
