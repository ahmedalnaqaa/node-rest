const express = require('express');
const app = express();
const port = 3000;
const templates = require('./templates.json');

app.get('/rest', (req, res) => {
  res.json(templates);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})