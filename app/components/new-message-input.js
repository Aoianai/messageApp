import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/* app starts with id 0 & 1 in use by preloaded records */
let idCount = 2;

export default class NewMessageInputComponent extends Component {
  @service store;

  @action
  addMessage() {
    const message = this.store.createRecord('message', {
      id: idCount++,
      title: 'defaultTitle',
      initial: 'D',
      username: this.username,
      content: this.messageText,
      isCurrentUser: true,
    });
    console.log('record created');
    message.save();
    console.log('record saved');
  }
}
