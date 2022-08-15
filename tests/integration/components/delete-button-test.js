import { module, test } from 'qunit';
import { setupRenderingTest } from 'message-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | delete-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DeleteButton />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <DeleteButton>
        template block text
      </DeleteButton>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
