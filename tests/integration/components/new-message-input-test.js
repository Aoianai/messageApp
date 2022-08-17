import { module, test } from 'qunit';
import { setupRenderingTest } from 'message-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { createMessages } from 'message-app/tests/helpers/create-messages';

module('Integration | Component | new-message-input', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
    this.messages = createMessages(this.store);
    this.message = this.messages[0];
  });

  test('send button is displayed correctly', async function (assert) {
    await render(hbs`<NewMessageInput @onCreate={{this.addMessage}} />`);
    assert.dom(this.element.getElementsByClassName('input-box')[0]).hasText("Send");
  });

  test('username button is displayed correctly', async function (assert) {
    await render(hbs`<NewMessageInput @onCreate={{this.addMessage}} />`);
    assert.dom(this.element.getElementsByClassName('username-button')[0]).hasText("Set a New Username");

  });
});
