const run = require('./lib/runner.js')

const caffeinate = (...args) => {

  const pid = typeof(args[0]) === 'number' ? args[0] : null

  if (typeof(args[args.length - 1]) === 'function') {
    const callback = args[args.length - 1]
      run(pid)
      .then(pid => callback(null, pid))
      .catch(e => callback(e))
  } else {
    return run(pid)
  }

}

module.exports = caffeinate
