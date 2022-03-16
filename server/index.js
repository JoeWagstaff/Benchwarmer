const express = require('express');
const controller = require('./controller/controller.js');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));

app.get('/api/benches', controller.getBenches);

app.post('/api/benches', controller.addBench);
app.post('/api/reviews', controller.addReview);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

