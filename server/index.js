const express = require('express');
const port = 3000;
const app = express();
const axios = require('axios');

const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public'));

app.get('/books', (req, res) => {
  res.end();
});

app.get('/books/:id', (req, res) => {
  let bookId = req.params.id;
  axios({
    method: 'get',
    url: `http://localhost:3002/authors/${bookId}`,
  })
    .then(response => {
      res.end(JSON.stringify(response.data));
    })
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`App listening on port ${port}`));