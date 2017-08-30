const pkg = require('./package.json');
const build = `${pkg.name} v${pkg.version} (${Math.round(new Date().getTime() / 1000)})`
const persistent = process.argv.includes('--persistent')

console.log(`BUILD: ${build}`)

module.exports = {
  verbose: false,
  expanded: true,
  persistent: persistent,
  simpleOutput: true,
  plugins: {
    local: {
      disabled: false,
      browsers: ['chrome','firefox']
    },
    sauce: {
      username: 'TheMagoo73',
      accessKey: '2c001949-782d-4926-966e-d0aa9fa57657', 
      disabled: false,
      name: pkg.name,
      build: build,
      browsers: [{
        browserName: 'chrome',
        platform: 'Windows 10',
        version: 'latest'
      }, {
        browserName: 'firefox',
        platform: 'Linux',
        version: 'latest'
      }, {
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: 'latest'
      },{
        browserName: 'safari',
        platform: 'macOS 10.12',
        version: 'latest'
      }]
    }
  }
}