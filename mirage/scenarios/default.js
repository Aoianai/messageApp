export default function (server) {
  server.create('message', {
    title: 'MR',
    initial: 'T',
    username: 'Lawrence Tureaud',
    content: 'Hey!',
    'is-current-user': false,
    'posted-at': Date(),
  });
}
