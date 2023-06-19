const router = require('express').Router();

router.use('/teams', require('./api/teams'))
router.use('/standings', require('./api/standings'))

module.exports = router