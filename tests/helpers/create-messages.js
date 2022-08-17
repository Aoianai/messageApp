export const createMessages = (store) => {
  const message1 = store.createRecord('message', {
    username: 'Laurence',
    initial: 'L',
    content: 'Hello',
    isCurrentUser: true,
  });

  const message2 = store.createRecord('message', {
    username: 'David',
    initial: 'D',
    content: 'Hi',
    isCurrentUser: false,
  });

  return [message1, message2];
};

export const createMessagesOnServer = (server) => {
  const message1 = server.createRecord('message', {
    username: 'Laurence',
    initial: 'L',
    content: 'Hello',
    'is-current-user': true,
    'posted-at': '2022/3/24 12:35:26',
  });

  const message2 = server.createRecord('message', {
    username: 'David',
    initial: 'D',
    content: 'Hi',
    'is-current-user': false,
    'posted-at': '2022/3/24 12:36:12',
  });

  return [message1, message2];
};
