myApp.config(function ($stateProvider, $urlRouterProvider) {
    var layoutStyle = 'backendManagement';

    var layouts = {
        backendManagement: {
            layout: 'js/core/layout/backendManagement/main.html',
            navigation: 'js/core/navigation/navigation.html',
            menu: 'js/core/menu/menu.html',
            content: 'js/core/content/content.html',
            footer: 'js/core/footer/footer.html'
        }
    };

    $stateProvider
        .state('csi', {
            url: '/csi',
            abstract: true,
            ncyBreadcrumb: {
                label: 'VJR'
            },
            views: {
                '': {
                    templateUrl: layouts[layoutStyle].layout,
                    controller: "mainCtrl"
                },
                'navigation@csi': {
                    templateUrl: layouts[layoutStyle].navigation,
                    controller: 'navigationCtrl'
                },
                'menu@csi': {
                    templateUrl: layouts[layoutStyle].menu,
                    controller: 'menuCtrl'
                },
                'footer@csi': {
                    templateUrl: layouts[layoutStyle].footer,
                    controller: 'footerCtrl'
                }
            }
        })
        .state('login', {
        url: '/login',
        views: {
        '': {
                templateUrl: "page/login/login.html",
                controller: 'loginCtrl'
            }
        }
        })
        .state('csi.dashboard', {
            url: '/dashboard',
            role: 1,
            ncyBreadcrumb: {
                label: 'Dashboard',
                parent: 'csi'
            },
            views: {
                'content': {
                    templateUrl: "page/dashboard/dashboard.html",
                    controller: 'dashboardCtrl'
                }
            },
            requiresLogin: true
        })
        .state('csi.paopao', {
            url: '/paopao',
            role: 1,
            views: {
                'content': {
                    templateUrl: "page/paopao/paopao.html",
                    controller: 'paopaoCtrl'
                }
            },
            requiresLogin: true
        })
        .state('csi.CRUD', {
            url: '/CRUD',
            role: 1,
            views: {
                'content': {
                    templateUrl: "page/CRUD/CRUD.html",
                    controller: 'CRUDCtrl'
                }
            },
            requiresLogin: true
        })

    ;

    $urlRouterProvider.otherwise('login');

});
