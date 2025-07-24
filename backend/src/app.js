const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const app = express();
require('dotenv').config(); // make sure to npm install dotenv if not yet
const cors = require('cors');

app.use(cors()); // enable CORS for all routes
app.use(express.json()); // for parsing application/json
app.get( '/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/ai', aiRoutes);

module.exports = app;