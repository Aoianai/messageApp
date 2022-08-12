import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/* app starts with id 0 & 1 in use by preloaded records */
let idCount = 1;

export default class NewMessageInputComponent extends Component {
  @service store;

  @action
  addMessage(messageText) {
    this.store.push({
      data: [
        {
          id: idCount,
          type: 'message',
          attributes: {
            title: 'default title',
            initial: 'D',
            username: this.username,
            content: messageText,
            isCurrentUser: true,
            postedAt: Date(),
          },
        },
      ],
    });
    /*
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
    console.log('record pushed');
 */
  }
  idCount = idCount++;
}
