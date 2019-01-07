const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('./dist/poetical'));

app.get('/*', (req, res) => {
    res.sendFile('./dist/Poetical/index.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});