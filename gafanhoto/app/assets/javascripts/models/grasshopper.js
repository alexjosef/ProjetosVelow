this.app.factory("Grasshopper", ['$resource', function ($resource) {
    return $resource('/grasshoppers/:id.json', {id: '@id'}, {
        get: {method: 'GET'},
        create: {method: 'POST'},
        update: {method: 'PATCH'},
        destroy: {method: "DELETE"},
        recover: {method: 'PATCH', url: '/grasshoppers/:id/recover.json'}
    });
}]);