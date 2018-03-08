myApp.controller('paopaoCtrl', function($rootScope, $scope, $http, NgTableParams) {
    console.log('httpCtrl');

    $scope.getData1 =function () {
        $http({
            method: 'GET',
            url: 'localhost:3000/api/v1/product'
        }).then(function successCallback(response) {
            console.log(response);
            $scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
            alert("!!! Success !!!");
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            alert("!-- Failed --!");
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };

    $scope.getData2 =function (id) {
        $http({
            method: 'GET',
            url: 'localhost:3000/api/v1/product/'+ id
        }).then(function successCallback(response) {
            console.log(response);
            $scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
            alert("!!! Success !!!");
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            alert("!-- Failed --!");
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };

    $scope.postData =function (dataPost) {
        $http({
            method: 'POST',
            url: 'localhost:3000/api/v1/product',
            data: {
                name: dataPost.name,
                descr: dataPost.descr,
                price: dataPost.price,
                photo: dataPost.photo
            }
        }).then(function successCallback(response) {
            alert("!!! Success !!!");
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            alert("!-- Failed --!");
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };

    $scope.putData =function (dataPut) {
        $http({
            method: 'PUT',
            url: 'localhost:3000/api/v1/product'+id+'/edit',
            data: {
                name: dataPut.name,
                descr: dataPut.descr,
                price: dataPut.price,
                photo: dataPut.photo
            }
        }).then(function successCallback(response) {
            alert("!!! Success !!!");
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            alert("!-- Failed --!");
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
    $scope.delData =function () {
        $http({
            method: 'DELETE',
            url: 'localhost:3000/api/v1/product'+id
        }).then(function successCallback(response) {
            alert("!!! Success !!!");
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            alert("!-- Failed --!");
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };


});