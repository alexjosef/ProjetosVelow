this.app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'static/dashboard/index',
            controller: 'DashboardCtrl',
            resolve: authRouteResolverLogged(null, ['dashboard']),
            reloadOnSearch: false
        })
        .when('/dashboard', {
            templateUrl: 'static/dashboard/index',
            controller: 'DashboardCtrl',
            resolve: authRouteResolverLogged(null, ['dashboard']),
            reloadOnSearch: false
        })
        .when('/grupos', {
            templateUrl: routeIndexView,
            controller: 'GroupsIndexCtrl',
            resolve: authRouteResolverLogged(null, ['groups']),
            reloadOnSearch: false
        })
        .when('/grupos/:id', {
            templateUrl: routeShowView,
            controller: 'GroupsShowCtrl',
            resolve: authRouteResolverLogged(null, ['groups']),
            reloadOnSearch: false
        })
        .when('/gafanhotos', {
            templateUrl: routeIndexView,
            controller: 'GrasshoppersIndexCtrl',
            resolve: authRouteResolverLogged(null, ['grasshoppers']),
            reloadOnSearch: false
        })
        .when('/gafanhotos/:id', {
            templateUrl: routeShowView,
            controller: 'GrasshoppersShowCtrl',
            resolve: authRouteResolverLogged(null, ['grasshoppers']),
            reloadOnSearch: false
        })
        .when('/recrutadores', {
            templateUrl: routeIndexView,
            controller: 'RecruitersIndexCtrl',
            resolve: authRouteResolverLogged(null, ['recruiters']),
            reloadOnSearch: false
        })
        .when('/recrutadores/:id', {
            templateUrl: routeShowView,
            controller: 'RecruitersShowCtrl',
            resolve: authRouteResolverLogged(null, ['recruiters']),
            reloadOnSearch: false
        })
        .when('/acesso/administradores', {
            templateUrl: routeIndexView,
            controller: 'AdministratorsIndexCtrl',
            resolve: authRouteResolverLogged(null, ['administrators']),
            reloadOnSearch: false
        })
        .when('/acesso/administradores/:id', {
            templateUrl: routeShowView,
            controller: 'AdministratorsShowCtrl',
            resolve: authRouteResolverLogged(null, ['administrators']),
            reloadOnSearch: false
        })
        // .when('/configuracoes', {
        //     templateUrl: 'static/settings/show',
        //     controller: 'SettingsShowCtrl',
        //     resolve: authRouteResolverLogged(null, ['settings']),
        //     reloadOnSearch: false
        // })
}]);