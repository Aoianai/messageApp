import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UsernameInputComponent extends Component {
  @tracked customUsername = 'user name';

  @action
  setUsername() {
    console.log(this.customUsername);
    this.customUsername = this.usernameText;
    console.log(this.customUsername);
  }
}
