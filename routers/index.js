const express = require('express');
const userRouter = require('./userRouter');

// роутер експрессу, містить тіж самі методи маршрутизації що і app
const router = express.Router();
router.use('/users', userRouter);

module.exports = router;
