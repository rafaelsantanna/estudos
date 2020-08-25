const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
 const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.j0rta.mongodb.net/omnistack9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);