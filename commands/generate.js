'use strict'

const child = require('child_process')
const path = require('path')
const fs = require('fs')
const marked = require('marked')
const Terminal = require('marked-terminal')

const TEMPLATES = {
  app: 'https://github.com/hunterloftis/heroku-node-template',
  module: 'https://github.com/hunterloftis/node-module-template'
}
const PARENT_STDIO = { stdio: [0, 1, 2] }

module.exports = (topic) => {
  marked.setOptions({ renderer: new Terminal() })

  return {
    topic: topic,
    command: 'generate',
    args: [{ name: 'directory' }],
    flags: [{ name: 'template', char: 't', description: 'specify a template', hasValue: true }],
    description: 'generates a basic node app with a "web" process',
    help: 'DIRECTORY will be created, or pass . to use the current directory',
    run: generate
  }
}

function generate (context) {
  const dir = path.join(context.cwd, context.args.directory)
  const env = path.join(dir, '.env')
  const relative = path.relative(context.cwd, dir)
  const template = context.flags.template || 'app'
  const repo = TEMPLATES[template]

  child.execSync(`git clone ${repo} ${dir}`, PARENT_STDIO)  // git clone the template repository
  fs.closeSync(fs.openSync(env, 'a'))                       // touch an empty .env file in the directory
  readme(dir)
  console.log(`\nnext: cd ${relative}\n`)
}

function readme (dir) {
  const readme = path.join(dir, 'readme.md')
  const md = fs.readFileSync(readme, { encoding: 'utf8' })
  console.log('\n' + marked(md).trim())
}
