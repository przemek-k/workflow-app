import loginTemplate from '../login/login.tpl';

var lazyLoad = {};

export /*@ngInject*/ function routeConfig($urlRouterProvider, $stateProvider, $futureStateProvider, $locationProvider){

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');

  $urlRouterProvider.otherwise('/login');

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: loginTemplate.name,
    controller: /*@ngInject*/ function($scope, $http, $location) {
      $scope.doLogin = function() {

        $http.get('./src/app/routes.json').then(function (resp) {
          angular.forEach(resp.data, function (fstate) {
            lazyLoad.futureStateProvider.futureState(fstate);

            $location.url('/dashboard');
          });
        });

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

  lazyLoad = {
    stateProvider: $stateProvider,
    futureStateProvider: $futureStateProvider
  };
}
