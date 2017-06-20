(function () {
  'use strict';

  function statusService($http, $q, headerFactory, appConfig) {
      var service = {
          getStatus: function () {
              var defer = $q.defer(),
                  url = appConfig.conversion_server_url + 'status';

              $http({
                method: 'GET',
                url: url,
                headers: headerFactory.conversionServiceHeaders()
              }).success(function (result) {
                  defer.resolve(result);
              });

              return defer.promise;
          }
      };

      return service;
  }

  angular.module('webHmlFhirConversionDashboardApp.services').service('statusService', statusService);
  statusService.$inject = ['$http', '$q', 'headerFactory', 'appConfig'];
}());
