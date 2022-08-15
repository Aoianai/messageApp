import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UsernameInputComponent extends Component {
  @service store;
  @tracked customUsername = 'user name';

  @action
  setUsername() {
    console.log(this.customUsername);
    this.customUsername = this.usernameText;
    /* let customName = this.usernameText; */
    console.log(this.customUsername);

    /*
    this.store.query('message', {
        filter: {
          isCurrentUser: true,
        },
      })
      .then(function (userMessages) {
        for (let i=0; i < userMessages.length; i++) {
          userMessages[i].username: customName;
        }
      });
    */
  }
}
