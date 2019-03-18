const routes = require('next-routes')

module.exports = routes()
  .add('about', '/about')
  .add('artists', '/artists')
  .add('contact', '/contact')
  .add('home', '/', 'index')
  .add('media', '/media')
  .add('film', '/film/:id')                                    