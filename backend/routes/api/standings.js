const router = require('express').Router();

const Standings = require('../../models/standings.model');

router.get('/', async (req, res) => {
  try {
    const standings = await Standings.module.find();
    res.json(standings)
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router