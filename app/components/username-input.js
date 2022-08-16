import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UsernameInputComponent extends Component {
  @service store;
  @tracked customUsername = 'user name';

  @action
  setUsername() {
    let newUserText = prompt('Enter your new Username: ', 'hiya :)');
    const message = this.store.peekRecord('message', 1);
    message.username = newUserText;
  }
}
