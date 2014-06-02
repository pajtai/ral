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

You can use 

```javascript
require('ral')('constants')
```

The above will give you `lib/constants`

Then if the location of contatns changes, only `require-paths.json` needs to be updated.

You can also add a path after the key. For example given `constants` above:

```javascript
require('ral')('constants/something')
```

will give you `lib/constants/something`.