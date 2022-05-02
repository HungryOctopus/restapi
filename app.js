const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

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
