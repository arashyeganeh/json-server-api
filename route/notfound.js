#!/usr/bin/env node
'use strict';

const router = require('express').Router();

router.get('*', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({});
});

module.exports = router;
