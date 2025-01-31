#!/usr/bin/env node
'use strict';

const router = require('express').Router();
const { getFiles, getFile } = require('#module/fs.js');

const apiLists = getFiles();

apiLists.forEach((entry) => {
  router.get(entry.url, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(getFile(entry.path)));
  });
});

module.exports = router;
