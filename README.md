# caffeinate

`caffeinate` is available in macOS and prevents the computer from going to sleep.

``` javascript
const caffeinate = require('caffeinate')

// use with promises
caffeinate(process.pid)
  .then(pid => console.log(console.log(`caffeinate pid: ${pid}`)))
  .catch(e => console.error(e))

// use with callback
caffeinate(process.pid, (err, pid) => {
  if (err) throw new Error(err)
  console.log(console.log(`caffeinate pid: ${pid}`))
})

// not bound to any process
caffeinate()
  .then(pid => console.log(`caffeinate pid: ${pid}`))
```
