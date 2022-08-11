import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    this.store.push({
      data: [
        {
          id: 1,
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
        {
          id: 2,
          type: 'message',
          attributes: {
            title: 'default title 2',
            initial: 'd2',
            username: 'default username 2',
            content: 'content default default default 321 123',
            isCurrentUser: false,
            postedAt: Date(),
          },
        },
      ],
    });
    console.log('records pushed from route/application.js');
  }
}
