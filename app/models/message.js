import Model, {attr} from '@ember-data/model';

export default class MessageModel extends Model {
  @attr title;
  @attr initial;
  @attr username;
  @attr content;
  @attr('boolean', {defaultValue: false}) isCurrentUser;
  @attr('date', {
    defaultValue() {
      return new Date();
    }
  }) postedAt;

  constructor() {
    super();
    if ()
      }

  get initial() {
    return (this.initial = this.username.charAt(0));
  }
}
