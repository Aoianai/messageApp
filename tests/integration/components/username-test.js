import { module, test } from 'qunit';
import { setupRenderingTest } from 'message-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | username', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Username />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Username>
        template block text
      </Username>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
