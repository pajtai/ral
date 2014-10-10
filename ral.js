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

Object.defineProperty(alias, 'pathsConfig', {
    set: function(configPath) {
        pathsConfig = configPath;
    },
    get: function() {
        return pathsConfig;
    }
});

module.exports = alias;

function alias (pathString) {
    var base,
        basePath,
        location = pathString.indexOf(separator);

    if (0 < location) {
        base = pathString.slice(0, location);
        basePath = pathsConfig[base];
        check(basePath, pathString);

        pathString = pathString.slice(location);
        // isn't sep always the same in require?
        return require(rootPath + separator + basePath + pathString);
    } else {
        basePath = pathsConfig[pathString];
        check(basePath, pathString);
        return require(rootPath + separator + basePath);
    }
}

function check(basePath, pathString) {
    if (!basePath) {
        throw Error('Cannot find "' + pathString + '" in require-paths.');
    }
}

function setPaths() {
    filePath = rootPath + '/require-paths.json';
    pathsConfig     = require(filePath);
}
