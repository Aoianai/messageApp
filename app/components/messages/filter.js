import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { messages, query } = this.args;

    if (query) {
      messages = messages.filter((message) => message.title.includes(query));
    }

    return messages;
  }
}
