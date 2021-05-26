const path = require('path')

module.exports = {
  entry: {
    'main.js': [
      path.resolve(__dirname, 'index.js'),
      path.resolve(__dirname, 'game.js')
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public')
  }
}
