'use strict';

var findup  = require('findup-sync'),
    path = require('path'),
    filePath = findup('*/require-paths.json'),
    rootPath = path.dirname(filePath),
    paths   = require(filePath);

module.exports = alias;

function alias (path) {
    return require(rootPath + '/' + paths[path]);
}