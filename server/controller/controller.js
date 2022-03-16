const model = require('../model/model.js');

module.exports = {
  getBenches: function(req, res) {
    model.getBenches(function(err, results) {

      const rows = results.rows;
      console.log(rows);
      if (err) {
        console.log('controller error', err);
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    });
  }
}