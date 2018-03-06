myApp.controller('paopaoCtrl', function($rootScope, $scope, NgTableParams) {
    console.log('paopaoCtrl');

    // Setting Page title
    $rootScope.titlePage = 'Table';
    $rootScope.subtitlePage = 'test';
    $scope.inputPaopao = '';


    $scope.data = [{name: "Jill",surname: "Smith", age: 50} ,{name: "Eve", surname: "Jackson", age: 94}];
    $scope.tableParams = new NgTableParams({}, { dataset: $scope.data});

});
