const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 4000;
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', indexRouter);

mongoose.connect('mongodb+srv://root:I2PjQeCSy4s4KW7a@cluster0-s02oy.mongodb.net/5data',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database connected');
});

app.listen(PORT, () => {
  console.log('API listening on port ' + PORT);
});

module.exports = app;