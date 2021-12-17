const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config()

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function () {
  console.log(`App running at port: http://localhost:${app.get('port')}`);
});