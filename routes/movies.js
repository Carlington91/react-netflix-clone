const express = require('express');
const router = express.Router();

const { movies, banner, trailer } = require('../controllers/movie');

router.post('/', movies);
router.post('/banner', banner);
router.post('/trailer', trailer);

module.exports = router;
