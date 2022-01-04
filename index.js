const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.use(express.static('view'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/index.html'));
})


app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/success.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})