import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Kate","lastName":"Smith","email":"kate@gmail.com"},
    {"id": 2,"firstName":"Sterling","lastName":"Hough","email":"ster.h@yahoo.com"},
    {"id": 3,"firstName":"Nuatu","lastName":"T","email":"buffman@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running on port: ${port}`);
    open(`http://localhost:${port}`);
  }
})
