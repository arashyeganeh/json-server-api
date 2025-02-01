#!/usr/bin/env node
'use strict';

const path = require('path');
const express = require('express');
const compression = require('compression');
const apicache = require('apicache');

const logger = require('#module/logger.js');
const homeRoute = require('#route/home.js');
const apiRoute = require('#route/api.js');
const notFoundRoute = require('#route/notfound.js');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = parseInt(process.env.PORT, 10) || 3000;

const publicDir = path.join(__dirname, 'public');
const app = express();
let cache = apicache.middleware;

function handleLog(req, res, next) {
  logger.info(`<- ${req.method} ${req.url}`);
  next();
}

function handleHeaders(req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
}

IS_PRODUCTION && app.use(cache('5 minutes'));
app.use(express.static(publicDir));
app.use(express.json());
app.use(compression())
app.use(handleLog);
app.use(handleHeaders);
app.set('view engine', 'ejs');
app.use('/', homeRoute);
app.use('/api/', apiRoute);
app.use('*', notFoundRoute);

app.listen(PORT, () => {
  console.log(`> Running on localhost:${PORT}`);
});
