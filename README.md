# caffeinate

`caffeinate` is a system utility provided in macOS and prevents the system from sleeping indefinitely, or, on behalf of a utility.

## usage

```javascript
const caffeinate = require(`caffeinate`)

caffeinate({ pid: 45623 })
.then(caffeinatePid => console.log(caffeinatePid))
.catch(error => console.log(error))
```

## api

### `caffeinate([options])`

Spawns caffeinate. Resolves with the pid of the spawned caffeinate instance.

`options` can be any of those supported by caffeinate with the addition of `timeout` (`t`) and `pid` (`w`).

[options-to-args](https://www.npmjs.com/package/options-to-args) handles the conversion of options into spawn args.
