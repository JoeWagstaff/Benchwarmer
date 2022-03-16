const db = require('../database');

module.exports = {

  getBenches: function(callback) {
    const query = "select b.bench_id, b.name, b.description, b.photo_url, json_agg(r.body) as reviews, round(AVG(r.score), 1) as score, json_build_object('lat', b.latitude, 'lng', b.longitude) as location from benches b left join reviews r on r.bench_id = b.bench_id group by b.bench_id";
    db.query(query, function(err, results) {
      callback(err, results);
    });
  }
};