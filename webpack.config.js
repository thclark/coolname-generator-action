const path = require('path');

module.exports = {
    mode: "production",
  entry: './index.js',  // Specify the entry point
  output: {
    filename: 'index.js',  // Name the output file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  target: "node",
  node: false,
};