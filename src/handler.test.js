const handler = require('./handler');

describe('test handler.hello', () => {
  jest.resetModules();

  it('integração - hello', async () => {
    expect.assertions(1);

    const response = {
      statusCode: 200
    };

    const event = {
      queryStringParameters: {
        queryString1: 'this is queryString1',
        queryString2: 'this is queryString2'
      },
      pathParameters: {
        path1: 'this is path1',
        path2: 'this is path2'
      },
      body: '{"key":"value"}'
    }
    const hello = await handler.hello(event);
    expect(hello.statusCode).toStrictEqual(response.statusCode);
  })
});
