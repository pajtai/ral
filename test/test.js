'use strict';

process.env.REQUIRE_PATHS = '*/test/require-paths.json';

var ral = require('../ral');

require('chai').should();

describe('ral', function() {

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