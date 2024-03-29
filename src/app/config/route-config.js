import loginTemplate from '../login/login.tpl';
import signupTemplate from '../login/signup.tpl';

var lazyLoad = {};

export /*@ngInject*/ function routeConfig(
  $urlRouterProvider,
  $stateProvider,
  $futureStateProvider,
  $locationProvider
) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');

  $urlRouterProvider.otherwise('/login');

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: loginTemplate.name,
    controller: /*@ngInject*/ function($scope, $http, $location, $firebaseArray, $log, CurrentUser) {
      $scope.doLogin = function() {
        //Todo app needs to be parametrized
        var ref = new Firebase("https://glowing-fire-3914.firebaseio.com/userRoutes");

        $scope.userRoutes = $firebaseArray(ref);
        $scope.userRoutes.$loaded()
          .then(function () {
            $scope.userRoutes.forEach(function (fstate) {
              lazyLoad.futureStateProvider.futureState(fstate);
            });
            CurrentUser.setUserRoutes($scope.userRoutes);
            $location.url('/dashboard');
          })
          .catch(function(err) { $log.error(err); });

        lazyLoad.futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState',
          function ($q, $ocLazyLoad, futureState) {

            var def = $q.defer();

            System.import(futureState.src).then(loaded => {
              var newModule = loaded;
              if (!loaded.name) {
                var key = Object.keys(loaded);
                newModule = loaded[key[0]];
              }

              $ocLazyLoad.load(newModule).then(function() {
                def.resolve();
              }, function() {
                console.log('error loading: ' + loaded.name);
              });
            });

            return def.promise;
          }
        ]);
      };
    }
  });

  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: signupTemplate.name
  });

  lazyLoad = {
    stateProvider: $stateProvider,
    futureStateProvider: $futureStateProvider
  };
}
