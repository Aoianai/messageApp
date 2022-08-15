import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditButtonComponent extends Component {
  @service store;

  showMessageEditBox() {
    let newMessageText = prompt(
      'Enter the new message contents: ',
      this.content
    );
    const message = this.store.peekRecord('message', 1);
    if (newMessageText == null || newMessageText == '') {
      /* need to find a way to pass the id in from whichever message the button was generated on */
      message.destroyRecord();
    } else {
      message.setContent(newMessageText);
    }
  }
}
