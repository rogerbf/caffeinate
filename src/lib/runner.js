const spawn = require('child_process').spawn

const run = (path, pid) => {
  const child = spawn(path, ['-w', pid], {
    detached: true,
    stdio: 'ignore'
  });
  const cpid = child.pid
  child.unref()
  return Promise.resolve(cpid)
}

module.exports = run
