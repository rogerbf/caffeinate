const isCaffeinateInstalled = require('./lib/isCaffeinateInstalled.js')
const run = require('./lib/runner.js')

const caffeinate = pid => {
  return (
  isCaffeinateInstalled()
    .then(path => run(path, pid))
  )
}

module.exports = caffeinate
