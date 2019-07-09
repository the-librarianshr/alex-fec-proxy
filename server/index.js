const express = require('express');
const port = 3000;
const app = express();
const axios = require('axios');

const morgan = require('morgan');

// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
app.use(morgan('dev'));


// app.get('/books', (req, res) => {
//   res.end();
// });

app.get('/books/:id', (req, res, next) => {
  console.log('RUNNING');
  res.write(req.params.id);
  next();
});

app.use('/books/:id', express.static(__dirname + '/../public'));

app.listen(port, () => console.log(`App listening on port ${port}`));