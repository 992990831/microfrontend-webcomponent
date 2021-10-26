const path = require('path');
const express = require('express')
const app = express()
const port = 5002
const fileRoot = path.resolve(__dirname, '../public');

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: fileRoot });
})

app.get('/bundle', (req, res) => {
    res.sendFile('bundle.js', { root: fileRoot });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})