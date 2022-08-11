import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewMessageInputComponent extends Component {
  @service store;

  @action
  addMessage(messageText) {
    let message = this.store.createRecord('message', {
      title: 'defaultTitle',
      initial: 'D',
      username: this.username,
      content: messageText,
      isCurrentUser: true,
      postedAt: Date,
    });
    console.log('record created');
    message.save();
    console.log('record saved');
    this.store.push();
  }
}
