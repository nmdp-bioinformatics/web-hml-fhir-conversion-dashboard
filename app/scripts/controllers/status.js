(function () {
  'use strict';

  function status($scope, statusService) {
    /*jshint validthis: true */
    var statusCtrl = this;

    statusCtrl.scope = $scope;
    statusCtrl.statuses = [];

    statusCtrl.refresh = function () {
        statusService.getStatus(5).then(function (result) {
            statusCtrl.statuses = result;
        });
    };
  }

  angular.module('webHmlFhirConversionDashboardApp.controllers').controller('status', status);
  status.$inject = ['$scope', 'statusService'];
}());
