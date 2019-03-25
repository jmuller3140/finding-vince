const routes = require('next-routes')

module.exports = routes()
  .add('about')
  .add('artists')
  .add('contact')
  .add('index', '/')
  .add('media')
  .add('film', '/film/:id')                         