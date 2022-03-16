const db = require('../database');

module.exports = {

  getBenches: function(callback) {
    const query = "select b.bench_id, b.name, b.description, b.photo_url, json_agg(r.body) as reviews, round(AVG(r.score), 1) as score, json_build_object('lat', b.latitude, 'lng', b.longitude) as location from benches b left join reviews r on r.bench_id = b.bench_id group by b.bench_id";
    db.query(query, function(err, results) {
      callback(err, results);
    });
  },

  getLast: function() {
    return new Promise((resolve, reject) => {
      const query = 'select last_value from benches_bench_id_seq';
      db.query(query, function(err, results) {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(results);
      });
    });
  },

  addBench: function(params, lastId, callback) {
    return new Promise((resolve, reject) => {
      const query = 'insert into benches(name, description, photo_url, latitude, longitude) VALUES ($1, $2, $3, $4, $5)';
      db.query(query, params, function(err, results) {
        callback(err, results);
      });
    });
  },

  addReview: function(paramsTwo, lastId, callback) {
    return new Promise((resolve, reject) => {
      const queryTwo = `insert into reviews(bench_id, body, score) values ($1, $2, $3)`;
      db.query(queryTwo, paramsTwo, function(err, results) {
        callback(err, results);
      });
    });
  },

  addNewReview: function(paramsTwo, callback) {
    return new Promise((resolve, reject) => {
      const queryTwo = `insert into reviews(bench_id, body, score) values ($1, $2, $3)`;
      db.query(queryTwo, paramsTwo, function(err, results) {
        callback(err, results);
      });
    });
  }
};
