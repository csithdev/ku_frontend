myApp.controller('navigationCtrl', function($rootScope, $scope) {
    // console.log("navigationCtrl");

    $rootScope.toggleSidebar = function() {
        if (angular.element('#body').hasClass('sidebar-collapse')) {
            angular.element('#body').removeClass('sidebar-collapse');
        } else {
            angular.element('#body').addClass('sidebar-collapse');
        }
        if (angular.element('#body').hasClass('sidebar-open')) {
            angular.element('#body').removeClass('sidebar-open');
        } else {
            angular.element('#body').addClass('sidebar-open');
        }
    };
});