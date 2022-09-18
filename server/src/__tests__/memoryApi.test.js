import app from '../index.js';
import supertest from 'supertest';
let server = {};
beforeEach(() => {
  server = supertest(app);
});

describe('GET /memory/read', () => {
  it('should give 200 status', async () => {
    const res = await server.get('/memory/read');
    expect(res.status).toEqual(200);
  });
/*   it('should return numbers', async () => {
    const res = await server.get('/memory/read');
    expect(res.memory).toMatch(/([0-9])/);
  }); */
});

describe('GET /memory/write', () => {
  it('should give 200 status with message saved in M', async () => {
    const reqBody = {
      memoryState: '',
      result: 222,
    };
    const res = await server.put('/memory/write').send(reqBody);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({'message': `${reqBody.result} saved in M`});
  });
});
