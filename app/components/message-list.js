import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class displayMessage extends Component {
  @service store;
  model() {
    console.log('finding messages');
    return this.store.findAll('message');
  }
}
