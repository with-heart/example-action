const core = require('@actions/core')
const github = require('@actions/github')

const name = core.getInput('name')
if (!name) {
  core.setFailed('No name provided. Aborting!')
  return
}

const run = async () => {
  console.log(`Hello ${name}!`)
}

run()
