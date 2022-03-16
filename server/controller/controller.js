const model = require('../model/model.js');

module.exports = {
  getBenches: function(req, res) {
    model.getBenches(function(err, results) {
      if (err) {
        console.log('controller error', err);
        res.sendStatus(500);
      } else {
        res.send(results.rows);
      }
    });
  },

  addBench: async function(req, res) {
    const params = [req.body.name, req.body.description, req.body.photo_url, req.body.location.lat, req.body.location.lng];
    const lastId = await model.getLast(function(err, results) {});
    console.log(lastId);
    const id = (Number(lastId.rows[0].last_value) + 1);

    const paramsTwo = [id, req.body.reviews, req.body.score];
    console.log('params', params, 'paramstwo', paramsTwo);

    await model.addBench(params, id, function(err, results) {
      if(err) {
        console.log('controller error', err);
        res.sendStatus(500);
      }
       model.addReview(paramsTwo, id, function(err, results) {
        if(err) {
          console.log('controller error', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    });
  },

  addReview: function(req, res) {
    const params = [req.body.bench, req.body.review, req.body.score];
    model.addNewReview(params, function(err, results) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  }
}