import { module, test } from 'qunit';
import { setupRenderingTest } from 'message-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { createMessages } from 'message-app/tests/helpers/create-messages';

module('Integration | Component | message/username', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
    this.messages = createMessages(this.store);
    this.message = this.messages[0];
  });

  test('Username is displayed correctly', async function (assert) {
    await render(hbs`<Message::Username @message={{this.message}}/>`);

    console.log(this.element.getElementsByClassName('username')[0]);

    assert
      .dom(this.element.getElementsByClassName('username')[0])
      .hasText('Laurence');

    /* doesnt test to see if posted-at time is correct, couldnt work out how to, element was always null */
  });
});
