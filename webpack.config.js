const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... autres configurations webpack
  plugins: [
    new Dotenv(),
    // ... autres plugins
  ],
};
