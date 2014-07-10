'use strict';

var pkg             = require('./package.json'),
    separator       = '/',
    filePath,
    rootPath,
    pathsConfig;

alias.version = pkg.version;

Object.defineProperty(alias, 'basePath', {
    set: function(basePath) {
        rootPath = basePath;
        setPaths();
    },
    get: function() {
        return rootPath;
    }
});

module.exports = alias;

function alias (pathString) {
    var base,
        location = pathString.indexOf(separator);

    if (0 < location) {
        base = pathString.slice(0, location);
        pathString = pathString.slice(location);
        // isn't sep always the same in require?
        return require(rootPath + separator + pathsConfig[base] + pathString);
    } else {
        return require(rootPath + separator + pathsConfig[pathString]);
    }
}

function setPaths() {
    filePath = rootPath + '/require-paths.json';
    pathsConfig     = require(filePath);
}