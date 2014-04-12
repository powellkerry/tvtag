var app = angular.module('tvtag');

app.controller('FavoritesController', function ($scope, FavoritesFactory) {
    $scope.favorites = FavoritesFactory.loadFavorites();

    $scope.removeFavorite = function (favorite, $event) {
        FavoritesFactory.removeFavorite(favorite);
        $scope.favorites = FavoritesFactory.loadFavorites();
    };
});