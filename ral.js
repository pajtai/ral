'use strict';

var findup  = require('findup-sync'),
    rootPath = findup('*/require-paths.json'),
    paths   = require(rootPath);

module.exports = alias;

function alias (path) {
    path = 'constants';
    console.log('--- they are:');
    console.log(paths);
    console.log('path to get:')
    console.log(rootPath + '/' + paths[path]);
    console.log('--- it is:');
    console.log(require(rootPath + '/' + paths[path]));
    console.log('---------------');
}