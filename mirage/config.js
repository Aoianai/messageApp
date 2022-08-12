export default function () {
  this.get('/api/messages', function (schema, request) {
    return schema.messages.all();
  });

  this.post('/api/messages', function (schema, request) {
    const requestJson = JSON.parse(request.requestBody);

    return schema.create('message', {
      title: requestJson.title,
      initial: requestJson.initial,
      username: requestJson.username,
      content: requestJson.content,
      'is-current-user': requestJson['is-current-user'],
      'posted-at': Date(),
    });
  });
}
