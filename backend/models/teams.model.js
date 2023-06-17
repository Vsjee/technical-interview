const { model, Schema } = require('mongoose')

const teamsSchema = new Schema({
  team: {
    id: Number,
    name: String,
    country: String,
    founded: Number,
    national: Boolean,
    logo: String
  },
  venue: {
    id: Number,
    name: String,
    address: String,
    city: String,
    capacity: Number,
    surface: String,
    image: String
  }
})

exports.module = model('team', teamsSchema)