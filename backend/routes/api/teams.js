const router = require('express').Router();

const Team = require('../../models/teams.model')

router.get('/', async (req, res) => {
  try {
    const teams = await Team.module.find()
    res.json(teams)
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.get('/:teamId', async (req, res) => {
  try {
    const { teamId } = req.params;

    const team = await Team.module.findById(teamId)
    res.json(team)
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const team = Team.module.create(req.body)
    res.json(team)
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router