export default function (server) {
  server.create('message', {
    title: '',
    initial: 'L',
    username: 'Lawrence Tureaud',
    content: 'Hey!',
    'is-current-user': false,
    'posted-at': Date(),
  });
}
