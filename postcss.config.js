const autoprefixer =require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
  	autoprefixer({browsers: ['last 5 versions']}),
  	cssnano
  ]
}