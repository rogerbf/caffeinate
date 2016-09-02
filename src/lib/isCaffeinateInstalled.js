const exec = require('child_process').execFile
const path = require('path')

const isCaffeinateInstalled = () => {
  return new Promise((resolve, reject) => {
    exec('which', ['caffeinate'], (err, stdout, stderr) => {
      if (path.parse(stdout.trim()).name === 'caffeinate') {
        resolve(stdout.trim())
      } else { reject('caffeinate binary could not be found') }
    })
  })
}

module.exports = isCaffeinateInstalled
