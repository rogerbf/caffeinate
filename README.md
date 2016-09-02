# caffeinate

`caffeinate` is available in macOS and prevents the computer from sleeping.

This module spawns `caffeinate` which will prevent the computer from sleeping until the provided pid exits.

``` javascript
const caffeinate = require('caffeinate')

caffeinate(process.pid)
  .then(pid => console.log(pid)) // caffeinate instance pid
  .catch(e => console.error(e))
```
