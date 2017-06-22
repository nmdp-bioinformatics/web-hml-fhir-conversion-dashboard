(function () {
  'use strict';

  var appConfig = {
      'conversion_server_url': 'http://localhost:8091/v1/'
  };

  angular.module('webHmlFhirConversionDashboardApp.config').constant('appConfig', appConfig);
}());
