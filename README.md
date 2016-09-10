# caffeinate

`caffeinate` is available in macOS and prevents the computer from going to sleep.

This module spawns `caffeinate` which will prevent the computer from going to sleep as long as the process with the provided pid is running.

``` javascript
const caffeinate = require('caffeinate')

// promise
caffeinate(process.pid)
  .then(pid => console.log(pid))
  .catch(e => console.error(e))

// callback
caffeinate(process.pid, (err, pid) => {
  if (err) throw new Error(err)
  console.log(pid)
})
```

The returned value is the process identifier for the spawned `caffeinate` instance.
