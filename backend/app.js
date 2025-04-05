const express = require('express');
const cors = require('cors');

const {addNumber, subtract} = require('./utils.js')

const port = 3001;
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

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = subtract(a, b);
    res.json({ result });
});

// GET endpoint to get the current number
app.get('/get-number', (req, res) => {
    res.json({ number: currentNumber });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app