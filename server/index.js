const express = require('express');
const port = 3000;
const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));

// app.get('/books/:id', (req, res, next) => {
//   console.log('RUNNING');
//   res.write(req.params.id);
//   next();
// });

app.use('*', express.static(__dirname + '/../public'));

app.listen(port, () => console.log(`App listening on port ${port}`));
