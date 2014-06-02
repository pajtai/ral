Require path aliasing.

Put `require-paths.json` in your root. And then use

```javascript
// Will require in the value relative to the root
require('ral')('key');
```

For example with the `require-paths.json` of

```json
{
   "constants" : "lib/constants"
}
```

You can use `require('ral')('constants')`

Then if the location of contatns changes, only `require-paths.json` needs to be updated.

Subpaths coming soon.