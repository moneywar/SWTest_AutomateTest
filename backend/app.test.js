const request = require('supertest');
const app = require('./app.js'); // Import your Express app
const utils = require('./utils');

// Test API
test('GET /get-number', async () => {
    const res = await request(app).get('/get-number');
    expect(res.statusCode).toBe(200);
    expect(typeof res.body.number).toBe('number'); // Check if the "number" property is a number
});

test('POST /add-number', async () => {
    const res = await request(app)
        .post('/add-number')
        .send({ number: 10 }); // Send a number to add

        console.log(res.body);

    expect(res.statusCode).toBe(200);
    expect(typeof res.body.result).toBe('number'); // Check if the "result" property is a number
});

