const router = require('express').Router();

const Team = require('../../models/teams.model')

router.get('/', async (req, res) => {
  const songs = await Team.module.find()
  res.json(songs)
})

router.get('/:teamId', (req, res) => {

})

module.exports = router