import Model, { attr } from '@ember-data/model';

export default class MessageModel extends Model {
  @attr title; // ="{{@username}}'s avatar"
  @attr initial; // ={{substring @username start=0 end=1}}
  @attr('string', { defaultValue: 'userName' }) username;
  @attr('string', { defaultValue: ' ' }) content;
  @attr('boolean', { defaultValue: false }) isCurrentUser;
  @attr('date') postedAt;

  set content(newText) {
    this.content = newText;
  }

  get initial() {
    if (this.username) {
      return this.username.charAt(0).toUpperCase();
    } else {
      return '';
    }
  }
}
