const isCaffeinateInstalled = require('./lib/isCaffeinateInstalled.js')
const run = require('./lib/runner.js')

const caffeinate = (...args) => {
  const pid = args[0]

  if (typeof(args[1]) === 'function') {
    isCaffeinateInstalled()
      .then(path => run(path, pid))
      .then(pid => args[1](null, pid))
      .catch(e => args[1](e))
  } else {
    return isCaffeinateInstalled().then(path => run(path, pid))
  }
}

module.exports = caffeinate
