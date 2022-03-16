const express = require('express');
const controller = require('./controller/controller.js');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));

app.get('/api/benches', controller.getBenches);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

