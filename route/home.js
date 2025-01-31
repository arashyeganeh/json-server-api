#!/usr/bin/env node
'use strict';

const router = require("express").Router();

router.get('/', (req, res) => {
  res.sendFile(publicDir + '/index.html');
});

module.exports = router;
