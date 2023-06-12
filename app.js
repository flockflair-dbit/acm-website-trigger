require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const axios = require('axios').default;

const app = express();
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.get('/trigger', async (req, res) => {
    const url = 'https://api.github.com/repos/flockflair-dbit/acm-website/dispatches';
    const headers = {
        Accept: 'application/vnd.github+json',
        Authorization: process.env.GITHUB_TOKEN,
    };
    const response = await axios({ url: url, method: 'POST', data: { event_type: 'webhook' }, headers: headers });
    return res.status(200).json({ headers: response.headers, data: response.data, status: response.status });
})

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));