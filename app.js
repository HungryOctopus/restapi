const express = require('express');

const app = express();


//ROUTES

app.get('/', (req, res, send) => {
  res.send('Yeaaaaaah');
});

app.get('/yeah', (req, res, send) => {
  res.send('Yeaaaaaah baby');
});

// How do we start listening to the server?
app.listen(3000);
