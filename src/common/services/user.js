import angular from 'angular';

export default angular
  .module('user', [])
  .factory('CurrentUser', /*@ngInject*/ function() {
    var userRoutes = [];
    return {
      setUserRoutes: function(routes) { userRoutes = routes; },
      getUserRoutes: function() { return userRoutes; }
    };
});
