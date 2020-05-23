const routes = require('next-routes')

module.exports = routes()
  .add('about')
  .add('artists')
  .add('contact')
  .add('index', '/')
  .add('media', '/media/:id')
  .add('film', '/film/:id')                         