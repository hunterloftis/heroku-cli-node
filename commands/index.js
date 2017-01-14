module.exports = (pkg) => {
  return {
    topic: pkg.topic,
    description: pkg.description,
    run: (context) => { console.log(pkg.version) }
  }
}
