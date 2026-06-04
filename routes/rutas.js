const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const movieRouter = require('./movieRouter');
const reviewRouter = require('./reviewRouter');

router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use('/reviews', reviewRouter);

module.exports = router;