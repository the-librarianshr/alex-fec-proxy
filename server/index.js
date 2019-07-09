const express = require('express');
const port = 3000;
const app = express();
const axios = require('axios');

const morgan = require('morgan');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public'));

app.get('/books', (req, res) => {
  res.end();
});

app.get('/books/:id', (req, res) => {
  let bookId = req.params.id;
  axios({
    method: 'get',
    url: `http://localhost:3030/book/${bookId}`
  })
    .then(response => {
      return response.data[0];
    })
    .then(book => {
      axios({
        method: 'get',
        url: `http://localhost:3002/authors/${book.author.id}`
      })
        .then(response => {
          book.author = response.data;
          res.render('index', { book: book });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`App listening on port ${port}`));