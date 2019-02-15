this.app.controller('GrasshoppersNewCtrl', ['$scope', '$rootScope', '$controller', '$q', 'Upload', 'Flash', function ($scope, $rootScope, $controller, $q, Upload, Flash) {

    //Extend base controller
    angular.extend(this, $controller('GrasshoppersBaseCtrl', {$scope: $scope}));

    var config = {
        new: {
            objectDefault: {
                active: true
            },
            refreshList: true,
            closeOnCreate: true
        }
    };

    //Merge base config with controller config
    $scope.resourceConfig = angular.merge($scope.resourceConfig, config);

    angular.extend(this, $controller('NewConcern', {$scope: $scope}));

}]);