var home = require('../app/controllers/home');

  module.exports = function (app){
  app.get('/transfer', home.relay);
 }
