import request from 'supertest';
import app from '../app.js';

describe('API Testing', () => {
  it('GET /get-number should return current number', async () => {
    const res = await request(app).get('/get-number');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('number');
  });

  it('POST /add-number should add number correctly', async () => {
    const res = await request(app)
      .post('/add-number')
      .send({ number: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result');
  });

  it('POST /add-number with invalid input should return 400', async () => {
    const res = await request(app)
      .post('/add-number')
      .send({ number: 'not-a-number' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Invalid number');
  });
});