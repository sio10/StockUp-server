const express = require('express');
const router = express.Router();
const Post = require('../models/Main');

router.get('/', (req,res) => {
    res.send('We are on home')
});

router.post('/', (req,res) => {
    console.log(req.body);
    res.send('Post is working');
});

module.exports = router;
