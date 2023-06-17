const router = require('express').Router();

router.use('/teams', require('./api/teams'))

module.exports = router