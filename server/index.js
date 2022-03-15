const express = require('express');
// const API_KEY = require('./config.js');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

