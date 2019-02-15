this.app.controller('GrasshoppersIndexCtrl', ['$scope', '$rootScope', '$controller', '$location', '$filter', 'Update', 'Flash', function ($scope, $rootScope, $controller, $location, $filter, Update, Flash) {
    //Extend base controller
    angular.extend(this, $controller('GrasshoppersBaseCtrl', {$scope: $scope}));

    var config = {
        index: {
            returnName: 'grasshoppers',
            dataTablePartial: $rootScope.appPartials.resources.index.dataTable,
            type: 'dataTable',
            fluid: true,
            attributes: ['id', 'name'],
            params: {
                sort_property: 'id',
                sort_direction: 'asc'
            },
            per_page: 25,
            dataTableStartConfig: {
                rowLimits: [25, 50, 75]
            },
            inactiveCondition: 'object.deleted_at',
            columns: [
                {
                    name: 'description',
                    value: 'object.description',
                    orderBy: 'description'
                },
                {
                    name: 'age',
                    value: 'object.age',
                    orderBy: 'age'
                },
                {
                    name: 'group_id',
                    value: 'object.group_id',
                    orderBy: 'group_id'
                }
            ],
            new: {
                view: 'static/grasshoppers/_new',
                ctrl: 'GrasshoppersNewCtrl',
                actions: []
            },
            show: {
                click: "hrefLocation(('routes.modules.grasshopper' | translate) + object.id)",
                ctrl: 'GrasshoppersShowCtrl'
            },
            actions: [
                {
                    name: 'remove',
                    icon: 'delete',
                    class: '\'red-btn\'',
                    condition: '!object.deleted_at',
                    function: 'destroy(loadingPromise, object)'
                }
            ]
        }
    };

    //Merge base config with controller config
    $scope.resourceConfig = angular.merge($scope.resourceConfig, config);

    //Extend concerns
    angular.extend(this, $controller('IndexConcern', {$scope: $scope}));

    //Start list
    $scope.start();

}]);