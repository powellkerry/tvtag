var app = angular.module('tvtag');

app.controller('MainController', function ($scope, MainFactory) {
    $scope.programs = [];

    MainFactory.loadPrograms(['se-4d1a5f207f6dfb6e36b3bda23062b82c', 'se-ec1a0c11273c4c6840ec141c675693bf', 'se-4440ee8506a31b5f6bf71d4e22a2fd95'], function (programs) {
        $scope.programs = programs;
    });
});