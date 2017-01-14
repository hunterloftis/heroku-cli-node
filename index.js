'use strict'

const pkg = require('./package.json')

exports.topic = {
  name: pkg.topic,
  description: pkg.description
}

exports.commands = [
  require('./commands/write.js')(pkg.topic)
]
