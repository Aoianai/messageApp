import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class DeleteButtonComponent extends Component {
@service store;
  @action
  deleteMessage() {
    console.log('delete message');
    const message = this.store.peekRecord('message', );
    message.destroyRecord();
  }
}
