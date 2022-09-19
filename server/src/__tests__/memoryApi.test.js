import app from '../app.js';
import supertest from 'supertest';
let server = {};
beforeEach(() => {
  server = supertest(app);
});

describe('GET /memory/read', () => {
  it('should give 200 status when result is readed from file', async () => {
    const res = await server.get('/memory/read');
    expect(res.status).toEqual(200);
  });
});

describe('GET /memory/write', () => {
  it('should give 200 status when result is saved in memory', async () => {
    const reqBody = {
      memoryState: '',
      result: 222,
    };
    const res = await server.put('/memory/write').send(reqBody);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({'message': `${reqBody.result} saved in M`});
  });
  it('should give 200 status when memory is cleared', async () => {
    const reqBody = {
      memoryState: 'M',
      result: 222,
    };
    const res = await server.put('/memory/write').send(reqBody);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({'message': 'M cleared'});
  });
  it('should give 406 status when memoryState is invalid', async () => {
    const reqBody = {
      memoryState: 2,
      result: 222,
    };
    const res = await server.put('/memory/write').send(reqBody);
    expect(res.status).toEqual(406);
    expect(res.body).toEqual({'message': 'Invalid memoryState value'});
  });
  it('should give 406 status when result is invalid', async () => {
    const reqBody = {
      memoryState: '',
      result: '/',
    };
    const res = await server.put('/memory/write').send(reqBody);
    expect(res.status).toEqual(406);
    expect(res.body).toEqual({'message': 'Invalid value'});
  });
  it('should give 500 status when req.body is not appropriate', async () => {
    const reqBody = {
      memoryState: '',
    };
    const res = await server.put('/memory/write').send(reqBody);
    expect(res.status).toEqual(400);
    expect(res.body).toEqual({'message': 'Wrong request body'});
  });
});
