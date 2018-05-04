(function () {
  var manageRoute, publicRoute;
  manageRoute = require('../api/ManageService/route');
  publicRoute = require('../api/Public/route');

  module.exports = function (app) {
    app.use('/api/ManageService', manageRoute);
    app.use('/api/Public', publicRoute);
  };

}).call(this);
