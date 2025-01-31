#!/usr/bin/env node
'use strict';

const { getFiles } = require('#module/fs.js');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('../view/home.ejs', {
    routes: getFiles(),
  });
});

module.exports = router;
