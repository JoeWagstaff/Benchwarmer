CREATE DATABASE benchwarmer;
\c benchwarmer;

CREATE TABLE benches (
  bench_id SERIAL,
  name VARCHAR(100),
  description VARCHAR(1000),
  longitude DECIMAL(9, 6),
  latitude DECIMAL(9, 6)
);

ALTER TABLE benches ADD CONSTRAINT benches_pkey PRIMARY KEY (bench_id);

CREATE TABLE photos (
  photo_id SERIAL,
  bench_id INTEGER,
  url VARCHAR(1000)
);

ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (photo_id);
ALTER TABLE photos ADD CONSTRAINT benches_id_fkey FOREIGN KEY (bench_id) REFERENCES benches(bench_id);

CREATE TABLE reviews (
  review_id SERIAL,
  bench_id INTEGER,
  body VARCHAR(1000),
  score INTEGER
);

ALTER TABLE reviews ADD CONSTRAINT reviews_pkey PRIMARY KEY (review_id);
ALTER TABLE reviews ADD CONSTRAINT benches_id_fkey FOREIGN KEY (bench_id) REFERENCES benches(bench_id);

INSERT INTO benches(name, description, longitude, latitude) VALUES ('Sand Point Bench', 'This is a great bench. Its comfy and looks at Lake Tahoe!', -119.933442, 39.196730);
INSERT INTO benches(name, description, longitude, latitude) VALUES ('test bench 2', 'test bench number 2', -120.933442, 40.196730);

INSERT INTO reviews(bench_id, body, score) VALUES (1, 'I like this bench', 5);
INSERT INTO reviews(bench_id, body, score) VALUES (1, 'I dislike this bench', 2);

INSERT INTO photos(bench_id, url) VALUES (1, 'https://i.ibb.co/z2s2PFH/beachbench.jpg');

INSERT INTO reviews(bench_id, body, score) VALUES (2, 'I like this bench', 4);
INSERT INTO reviews(bench_id, body, score) VALUES (2, 'I dislike this bench', 2);
INSERT INTO reviews(bench_id, body, score) VALUES (2, 'I love this bench', 5);
INSERT INTO reviews(bench_id, body, score) VALUES (2, 'I hate this bench', 1);
