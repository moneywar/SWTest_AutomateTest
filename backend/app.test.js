// ใช้เงื่อนไขเพื่อเลือกว่าจะ mock หรือไม่
if (process.env.MOCK_UTILS === 'true') {
    jest.unstable_mockModule('./utils.js', () => import('./mocks/utils.mock.js'));
  }
  
  import request from 'supertest';
  import app from './app.js'; // ต้อง import หลังจาก mockModule
  
  describe('API Test (with or without mock)', () => {
    test('POST /add-number should respond with result', async () => {
      const res = await request(app)
        .post('/add-number')
        .send({ number: 5 });
  
      console.log('POST /add-number result:', res.body);
      expect(res.statusCode).toBe(200);
      expect(typeof res.body.result).toBe('number');
    });
  });

  //รันใช้ mock >> npm run test:mock
  //รันไม่ใช้ mock >> npm test
