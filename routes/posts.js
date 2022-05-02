const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res, send) => {
  res.send('Yeaaaaaah baby posts');
});

//with async await
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Without Async await
// router.post('/', (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description
//   });

//   post
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json('Noooo an error');
//     });
// });

module.exports = router;
