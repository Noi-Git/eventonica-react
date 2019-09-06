// figure out what set of credentials to return

// design if we are in production or development
if  ( process.env.NODE_ENV === 'production' ) {
  // we are in the production - return the prod set of keys - heappen on heroku
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys
  module.exports = require('./dev');
}