'use strict';

var findup          = require('findup-sync'),
    path            = require('path'),
    separator       = path.sep,
    filePath        = findup(process.env.REQUIRE_PATHS || '*/require-paths.json'),
    rootPath        = path.dirname(filePath),
    pathsConfig     = require(filePath);

module.exports = alias;

function alias (pathString) {
    var base,
        location = pathString.indexOf(separator);

    if (0 < location) {
        base = pathString.slice(0, location);
        pathString = pathString.slice(location);
        return require(rootPath + separator + pathsConfig[base] + pathString);
    } else {
        return require(rootPath + separator + pathsConfig[pathString]);
    }
}