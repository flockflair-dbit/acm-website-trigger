require('dotenv').config()
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.post('/trigger', (req, res) => {
    return res.status(200).json({ message: 'Triggered' });
})

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));