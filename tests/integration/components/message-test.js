import { module, test } from 'qunit';
import { setupRenderingTest } from 'message-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { createMessages } from 'message-app/tests/helpers/create-messages';

module('Integration | Component | message', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
    this.messages = createMessages(this.store);
    this.message = this.messages[0];
  });

  test('Message content is displayed correctly', async function (assert) {
    await render(hbs`<Message @message={{this.message}} />`);

    assert.dom(this.element.getElementsByClassName('content')[0]).hasText("Hello");
  });
});
