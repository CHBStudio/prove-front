const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');

let bundler = new Bundler('src/index.html');
let app = express();

app.use(
  '/api',
  proxy({
    target: 'http://prove-project.ru'
  }),
);

app.use(
  '/media',
  proxy({
    target: 'http://prove-project.ru'
  }),
);

app.use(bundler.middleware());

app.listen(8001);