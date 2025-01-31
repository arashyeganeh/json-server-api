#!/usr/bin/env node
'use strict';

const router = require('express').Router();
const { getFiles, getFile } = require('#module/fs.js');

const apiLists = getFiles();

apiLists.forEach((entry) => {
  const jsonData = getFile(entry.path);
  const route = entry.parentPath.replace(/\\/g, '/') + '/' + entry.name;

  router.get(route, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
  });
});

module.exports = router;
