Require ALias [![Build Status](https://travis-ci.org/pajtai/ral.png?branch=master)](https://travis-ci.org/pajtai/ral)
================

Require path aliasing.

This module allows you to easily move files and directories in your app without having to update many require calls.
Instead you update the relevant alias definition.

The paths aliases to be used are defined in `require-paths.json`. All the paths are relative to
the directory this file is in. To configure this directory you must set `ral.basePath` before your first usage of `ral`.

For example if `require-paths.json` is:

```json
{
   "constants" : "lib/constants"
}
```

Then the base path can be set in the `index.js` at the root of the project using:

```javascript
require('ral').basePath = __dirname;
```

Then the module at `lib/constants` can be retrieved with:

```javascript
require('ral')('constants')
```

If the location of constants changes, only `require-paths.json` needs to be updated.

A path can be added after the key. For example given `constants` above:

```javascript
require('ral')('constants/something')
```

will give you `lib/constants/something`.

[Source (~20 lines)](https://github.com/pajtai/ral/blob/master/ral.js)

TODO: test on windows

Release Notes:

* 2014-06-02 0.0.1 Initial Release
* 2014-06-03 0.1.0 Added tests & process.env.REQUIRE_PATHS
* 2014-06-03 0.1.1 Locking down node version to >=0.8
* 2014-06-04 0.1.2 Removing hard coded path separator
* 2014-07-10 1.0.0 ral is dynamically configurable
* 2014-10-10 1.0.1 helpful errors if key is not found on require-paths
