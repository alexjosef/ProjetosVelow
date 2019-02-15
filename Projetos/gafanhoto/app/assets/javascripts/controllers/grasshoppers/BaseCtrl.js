this.app.controller('GrasshoppersBaseCtrl', ['$scope', '$rootScope', '$filter', 'Grasshopper', function ($scope, $rootScope, $filter, Grasshopper) {

    //Verify if already exists to never override the existent
    if (!$scope.resourceConfig) {
        $scope.resourceConfig = {
            identifier: 'grasshoppers', //broadcast event name identifier
            translationBase: "grasshoppers",
            permissionBase: "grasshoppers",
            routeBase: $filter('translate')('routes.modules.grasshoppers'),
            model: Grasshopper,
            icon: 'people',
            male: true,
            routeParamsList: {},
            routeParams: {},
            permittedActions: {
                show: true,
                create: true,
                update: true
            },
            mainPermittedParam: 'grasshopper', // check backend returns
            createUpdateParams: {
                grasshopper: {
                    description: 'object.description',
                    age: 'object.age',
                    group_id: 'object.group.id'
                }
            },
            createParams: {},
            updateParams: {},
            watchFields: [],
            enumerations: [],
            destroyRecoverAttribute: 'deleted_at',
            destroyedValue: true,
            recoveredValue: false
        };
    }

}]);