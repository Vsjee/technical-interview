const express = require('express');

require('dotenv').config();
require('./config/db');

const app = express();

// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//GET /api/teams
app.use('/api', require('./routes/api'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});