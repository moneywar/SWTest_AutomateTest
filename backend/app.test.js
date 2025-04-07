import request from 'supertest';
import app from './app.js'; // ต้องใช้ import เพราะ app.js เป็น ESM

describe('API Test', () => {
  test('GET /get-number', async () => {
    const res = await request(app).get('/get-number');
    expect(res.statusCode).toBe(200);
    expect(typeof res.body.number).toBe('number');
  });

  test('POST /add-number', async () => {
    const res = await request(app)
      .post('/add-number')
      .send({ number: 10 });

    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(typeof res.body.result).toBe('number');
  });
});
