import Model, { attr } from '@ember-data/model';

export default class MessageModel extends Model {
  @attr title; // ="{{@username}}'s avatar"
  @attr initial; // ={{substring @username start=0 end=1}}
  @attr('string', { defaultValue: 'userName' }) username;
  @attr content;
  @attr('boolean', { defaultValue: false }) isCurrentUser;
  @attr('date', {
    defaultValue() {
      return new Date();
    },
  })
  postedAt;
}
