import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/* app starts with id 0 & 1 in use by preloaded records */
let idCount = 2;

export default class NewMessageInputComponent extends Component {
  @service store;

  customUsername = 'caestus';

  @action
  addMessage() {
    const message = this.store.createRecord('message', {
      id: idCount++,
      title: `${this.customUsername}'s Avatar`,
      initial: `${this.customUsername.charAt(0)}`,
      username: this.customUsername,
      content: this.messageText,
      isCurrentUser: true,
    });
    console.log('record created');
    message.save();
    console.log('record saved');
  }

  @action
  setUsername() {
    this.customUsername = prompt(
      'Enter your new Username:',
      `${this.customUsername}`
    );
    this.store
      .query('message', {
        filter: {
          isCurrentUser: true,
        },
      })
      .then(function (userMessages) {
        console.log(userMessages.isCurrentUser);
      });
  }
}
