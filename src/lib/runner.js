const spawn = require('child_process').spawn
const isCaffeinateInstalled = require('./isCaffeinateInstalled.js')

const spawnCaffeinate = (path, pid) => {
  const args = pid ? `-w ${pid}` : `-i`
  const options = { detached: true, stdio: 'ignore' }
  const child = spawn(path, args.split(' '), options)
  const cpid = child.pid
  child.unref()
  return Promise.resolve(cpid)
}

const run = pid =>
  isCaffeinateInstalled()
    .then(path => spawnCaffeinate(path, pid))

module.exports = run
