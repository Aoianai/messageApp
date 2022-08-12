import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  async model() {
    this.store.push({
      data: [
        {
          id: 0,
          type: 'message',
          attributes: {
            title: 'default title',
            initial: 'd',
            username: 'default username',
            content: 'default content content default 123 321',
            isCurrentUser: false,
            postedAt: Date(),
          },
        },
      ],
    });
    console.log('records pushed from route/application.js');
  }
}
