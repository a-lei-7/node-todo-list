const homedir = require("os").homedir()
const home = process.env.HOME || homedir

module.exports.add = (name) => {
  console.log(home)
}