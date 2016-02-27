export /*@ngInject*/ function themeConfig($mdThemingProvider, $mdIconProvider){

  $mdIconProvider
    .icon("account"     , "dist/assets/svg/account_circle.svg"       , 36)
    .icon("dashboard"   , "dist/assets/svg/dashboard.svg"            , 36)
    .icon("hub"         , "dist/assets/svg/device_hub.svg"           , 36)
    .icon("logout"      , "dist/assets/svg/exit_to_app.svg"          , 36)
    .icon("notification", "dist/assets/svg/notifications.svg"        , 36)
    .icon("settings"    , "dist/assets/svg/settings.svg"             , 36)
    .icon("menu"        , "dist/assets/svg/menu.svg"                 , 36)
    .icon("reports"     , "dist/assets/svg/trending_up.svg"          , 36)
    .icon("apps"        , "dist/assets/svg/apps.svg"                 , 36);

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('grey')
    .warnPalette('red');
}
