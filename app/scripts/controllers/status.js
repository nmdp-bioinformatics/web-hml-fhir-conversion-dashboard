(function () {
  'use strict';

  function status($scope, statusService, downloadService) {
    /*jshint validthis: true */
    var statusCtrl = this;

    statusCtrl.scope = $scope;
    statusCtrl.statuses = [];

    statusCtrl.refresh = function () {
      statusService.getStatus(5).then(function (result) {
          statusCtrl.statuses = result;
      });
    };

    statusCtrl.downloadHmlXml = function (status) {
      downloadService.downloadHml(status.hmlId, true).then(function () {

      });
    };

    statusCtrl.downloadHmlJson = function (status) {
      downloadService.downloadHml(status.hmlId).then(function () {

      });
    };

    statusCtrl.downloadFhirXml = function (status) {
      downloadService.downloadFhir(status.hmlId, true).then(function () {

      });
    };

    statusCtrl.downloadFhirJson = function (status) {
      downloadService.downloadFhir(status.hmlId).then(function () {

      });
    };
  }

  angular.module('webHmlFhirConversionDashboardApp.controllers').controller('status', status);
  status.$inject = ['$scope', 'statusService', 'downloadService'];
}());
