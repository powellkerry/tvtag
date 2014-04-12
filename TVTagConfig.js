var app = angular.module('tvtag', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/views/main.html',
            controller: 'MainController'
        }).
        when('/moments/:programId', {
            templateUrl: '/views/moments.html',
            controller: 'MomentsController'
        }).
        when('/favorites', {
            templateUrl: '/views/favorites.html',
            controller: 'FavoritesController'
        });
});
