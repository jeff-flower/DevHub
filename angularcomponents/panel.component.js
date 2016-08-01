
(function() {
  'use strict'

  angular.module('myapps')
    .component('panel', {
      bindings: {
        app: '='
      },
      templateUrl: 'angularcomponents/panel.html'
    });

})();
