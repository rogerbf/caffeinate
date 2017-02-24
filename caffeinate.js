module.exports = ({ spawn, args }, options = {}) => {
  return new Promise((resolve, reject) => {
    try {
      const caffeinate = spawn(
        `caffeinate`,
        args
        .addAlias({ timeout: `t` })
        .addAlias({ watch: `w` })
        .addAlias({ pid: `w` })(options),
        {
          detached: true,
          stdio: `ignore`
        }
      )
      caffeinate.unref()
      resolve(caffeinate.pid)
    } catch (error) {
      reject(error)
    }
  })
}
