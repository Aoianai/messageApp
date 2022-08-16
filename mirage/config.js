import { Response } from 'miragejs';

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

  this.delete('/api/messages/:id', function (schema, request) {
    const foundMessage = schema.messages.find(request.params.id);
    if (foundMessage) {
      foundMessage.destroy();
      return new Response(204);
    } else {
      return new Response(404);
    }
  });

  this.patch('/api/messages/:id', function (schema, request) {
    const editMessage = schema.messages.find(request.params.id);
    if (editMessage) {
      editMessage.patch();
      return new Response(204);
    } else {
      return new Response(404);
    }
  });
}
