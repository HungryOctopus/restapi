const express = require('express');
const app = express();
const mongoose = require('mongoose');
// bodyParser "translates" posts requests from Postman into json format
const bodyParser = require('body-parser');
require('dotenv/config');

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

// How do we start listening to the server?
app.listen(3000);
