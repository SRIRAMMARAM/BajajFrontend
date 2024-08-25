const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

// POST /bfhl route
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            error: 'Invalid input format. Expected an array under "data".'
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && /^[a-zA-Z]+$/.test(item));
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]+$/.test(item));

    res.status(200).json({
        is_success: true,
        user_id: "john_doe_17091999",
        email_id: "john_doe@example.com",
        roll_number: "123456789",
        numbers,
        alphabets,
        highest_lowercase: lowercaseAlphabets.sort().pop() || null
    });
});


// GET /bfhl route
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
