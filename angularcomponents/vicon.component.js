
(function() {
  'use strict'

  angular.module('myapps')
    .component('vicon', {
      bindings: {
        testsuite: '@'
      },
      controller: 'viconCtrl',
      templateUrl: '/angularcomponents/vicon.html'
    });

})();
