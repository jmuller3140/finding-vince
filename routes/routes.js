const routes = require('next-routes')

module.exports = routes()
  .add('about')
  .add('artists')
  .add('contact')
  .add('home', '/', 'index')
  .add('media', '/media')
  .add('film', '/film/:id')                         