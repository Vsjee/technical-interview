const { model, Schema } = require('mongoose')

const standingsSchema = new Schema({
  rank: Number,
  team: {
    id: Number,
    name: String,
    logo: String,
  },
  points: Number,
  goalsDiff: Number,
  group: String,
  form: String,
  status: String,
  description: String,
  all: {
    played: Number,
    win: Number,
    draw: Number,
    lose: Number,
    goals: {
      for: Number,
      against: Number,
    },
  },
  home: {
    played: Number,
    win: Number,
    draw: Number,
    lose: Number,
    goals: {
      for: Number,
      against: Number,
    },
  },
  away: {
    played: Number,
    win: Number,
    draw: Number,
    lose: Number,
    goals: {
      for: Number,
      against: Number,
    },
  },
  update: String,
})

exports.module = model('standing', standingsSchema)