const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Docker!');
});

app.get('/mild', (req, res) => {
    res.send('WoW!!    WoW!   WOW!');
});

app.listen(3000, () => {
    console.log('API running on port 3000');
});