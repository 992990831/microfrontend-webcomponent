const path = require('path');
const express = require('express')
const app = express()
const port = 5003
const fileRoot = path.resolve(__dirname, './dist');

app.use(express.static(path.join(__dirname, './dist')))

app.get('/', (req, res) => {
    res.sendFile('index.bundle.js', { root: fileRoot });
})

app.get('/bundle', (req, res) => {
    res.sendFile('index.bundle.js', { root: fileRoot });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})