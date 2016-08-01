(function() {
  'use strict';

  angular.module('myapps')
    .component('tabs', {
      bindings: {
        tabinfo: '=',
        content: '='
      },
      controller: 'tabsCtrl',
      templateUrl: '/angularcomponents/tabs.html'
    });

})();
