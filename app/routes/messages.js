import Route from '@ember/routing/route';

export default class MessagesRoute extends Route {
  model() {
    console.log('The model hook just ran');
  }
}
