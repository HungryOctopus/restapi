const express = require('express');
const app = express();
const mongoose = require('mongoose');
// bodyParser "translates" posts requests from Postman into json format
const bodyParser = require('body-parser');
const cors = require('cors');
//dotenv: so the name and password of the database isn't visible
require('dotenv/config');

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// Import routes

const postsRoute = require('./routes/posts');

// Middleware: use postsRoutes everytime you go to /posts
app.use('/posts', postsRoute);

//ROUTES

app.get('/', (req, res, send) => {
  res.send('Home');
});

//Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to DB')
);

// Listens to the server
app.listen(3000);
