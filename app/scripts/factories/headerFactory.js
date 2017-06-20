(function () {
  'use strict';

  function headerFactory() {
      var factory = {
          conversionServiceHeaders: function () {
              return {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              };
          }
      };

      return factory;
  }

  angular.module('').factory('headerFactory', headerFactory);
  headerFactory.$inject = [];
}());
