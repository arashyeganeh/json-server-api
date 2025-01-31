#!/usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs');
const logger = require('#module/logger.js');

const apiBaseDir = path.resolve('api');

function getFile(targetDir) {
  try {
    const data = fs.readFileSync(targetDir, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    logger.error(`Error reading file: `, error);
  }
}

function getFiles(targetDir = apiBaseDir) {
  const fileList = [];

  function explore(directory) {
    try {
      if (!fs.existsSync(directory)) return;
      const entries = fs.readdirSync(directory, { withFileTypes: true });

      for (const entry of entries) {
        const entryPath = path.resolve(directory, entry.name);

        if (entry.isDirectory()) {
          explore(entryPath);
        } else if (entry.isFile()) {
          const getParentDir = entry.path.replace(path.resolve('api'), '');
          fileList.push({
            name: entry.name.split('.')[0],
            path: entryPath,
            parentPath: getParentDir
          });
        }
      }
    } catch (error) {
      logger.error(`Error exploring directory-> ${directory}`, error);
    }
  }

  explore(targetDir);
  return fileList;
}

module.exports.getFiles = getFiles;
module.exports.getFile = getFile;
