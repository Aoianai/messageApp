import { module, test } from 'qunit';
import { setupRenderingTest } from 'message-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { createMessages } from 'message-app/tests/helpers/create-messages';

module('Integration | Component | message/avatar', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
    this.messages = createMessages(this.store);
    this.message = this.messages[0];
  });

  test('Avatar is displayed correctly', async function (assert) {
    await render(hbs`<Message::Avatar @message={{this.message}}/>`);

    assert.strictEqual(
      this.element.getElementsByClassName('avatar')[0].getAttribute('title'),
      "Laurence's Avatar"
    );

    assert.strictEqual(
      this.element.getElementsByClassName('avatar')[0].textContent.trim(),
      'L'
    );
  });
});
