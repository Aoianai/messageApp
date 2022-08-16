import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MessageComponent extends Component {
  @service store;

  @action
  deleteMessage() {
    console.log('delete message');
    const message = this.store.peekRecord('message', this.args.message.id);
    message.destroyRecord();
  }

  @action
  showMessageEditBox() {
    const message = this.store.peekRecord('message', this.args.message.id);
    let holderText = message.content;
    let newMessageText = prompt('Enter the new message contents: ', `${message.content}` );
    if (newMessageText == null || newMessageText == '') {
      /* need to find a way to pass the id in from whichever message the button was generated on */
      message.destroyRecord();
    } else {
      message.content = newMessageText;
    }
  }
}
