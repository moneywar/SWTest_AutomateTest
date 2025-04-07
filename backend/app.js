import express from 'express';
import cors from 'cors';
import { addNumber } from './utils.js';

const app = express();
app.use(express.json());
app.use(cors());

// In-memory variable to store the current number
let currentNumber = 20;

// POST endpoint to add a number
app.post('/add-number', async (req, res) => {
    const newNumber = parseInt(req.body.number);
    if (isNaN(newNumber)) {
        return res.status(400).json({ error: 'Invalid number' });
    }
    const result = await addNumber(newNumber, currentNumber);
    currentNumber = result;
    res.json({ result });
});

// GET endpoint to get the current number
app.get('/get-number', (req, res) => {
    res.json({ number: currentNumber });
});

export default app; // ไม่ต้อง .listen ที่นี่