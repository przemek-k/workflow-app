export /*@ngInject*/ function debugConfig($compileProvider, $logProvider, $ocLazyLoadProvider){

  if(window.prod){
    $logProvider.debugEnabled(false);
    // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
    $compileProvider.debugInfoEnabled(false);
  }

  $ocLazyLoadProvider.config({ debug: false });
}
