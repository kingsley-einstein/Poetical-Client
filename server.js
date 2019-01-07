const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('./dist/Poetical'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/Poetical/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});