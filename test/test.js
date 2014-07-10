'use strict';

var ral = require('../ral'),
    pkg = require('../package.json');

ral.basePath = __dirname;

require('chai').should();

describe('ral', function() {

    describe('helpers', function() {
        it('version should be defined', function() {
             ral.version.should.equal(pkg.version);
        });
        it('can retrieve the rootPath', function() {
            ral.basePath.should.equal(__dirname);
        });
        it('can modify rootPath dynamically', function() {
            ral.rootPath = 'hello';
            ral.rootPath.should.equal('hello');
            ral.rootPath = __dirname;
        });
    });

    describe('direct path to file', function() {
        it('should require in the right file', function() {
            ral('file1').should.equal('file1');
        });
    });

    describe('path to containing directory', function() {
        it('should require in the right file if name is appended', function() {
            ral('dir1/file1').should.equal('file1');
        });
    });

    describe('path to containing parent directory', function () {
        it('should require in the right file if dir & name is appended', function() {
            ral('dir1/dir2/file2').should.equal('file2');
        });
    });

    describe('path with reference to parent directory', function () {
        it('should require in the right file', function() {
            ral('dir2/../file1').should.equal('file1');
        });
    });
});