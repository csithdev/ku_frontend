myApp.controller('loginCtrl', function( $rootScope, $scope, $state) {
    $scope.submitLogin = function () {
        $state.go('csi.dashboard');
    }
});

