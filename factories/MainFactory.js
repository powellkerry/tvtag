var app = angular.module('tvtag');

app.factory('MainFactory', function ($http) {
    return {
        programIds: [],
        responses: [],
        callback: null,
        loadPrograms: function (programIds, callback) {
            var me = this;
            me.programIds = programIds;
            me.callback = callback;
            me.responses = [];
            angular.forEach(programIds, function (programId) {
                $http.get('//test.i.tv:4989/v2/tvdata/programs/' + programId).success(function (data) {
                    me.aggregate(data, me);
                });
            });
        },
        aggregate: function (data, factory) {
            factory.responses.push(data);
            if (factory.responses.length === factory.programIds.length) {
                factory.callback(factory.responses);
            }
        }
    };

});