#!/usr/bin/env node
'use strict';

const pino = require('pino');

const logger = pino({
  transport: {
    target: 'pino-pretty', //npm install pino-pretty
    options: {
      colorize: true,
    },
  },
});

module.exports = logger;