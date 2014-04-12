var app = angular.module('tvtag');

app.factory('MomentsFactory', function ($http) {
    return {
        loadMoments: function (programId, callback) {
            $http.get('http://test.i.tv:4989/v2/tvtag/programs/' + programId + '/moments').success(callback);
        }
    };
});