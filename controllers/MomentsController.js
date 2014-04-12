var app = angular.module('tvtag');

app.controller('MomentsController', function($scope, $routeParams, MomentsFactory, FavoritesFactory, MainFactory) {
    $scope.moments = [];
    $scope.allFavorites = FavoritesFactory.loadFavorites();
    $scope.favorites = [];

    MomentsFactory.loadMoments($routeParams.programId, function (data) {
        angular.forEach(data.moments, function (moment) {
            if (moment.title && moment.screenshotUrl) {
                $scope.moments.push(moment);
            }
        });
    });

    $scope.isFavorite = function (moment) {
        var t = false;
        angular.forEach($scope.favorites, function (fav) {
            if (fav._id === moment._id) {
                t = true;
            }
        });
        return t;
    };

    $scope.syncFavorites = function (moment, $event) {
        if (!FavoritesFactory.isFavorite(moment)) {
            MainFactory.loadPrograms([$routeParams.programId], function (program) {
                var favorite = {
                    program: program[0],
                    moment: moment
                };
                FavoritesFactory.addFavorite(favorite);
            });
            $($event.target).addClass('selected');
        } else {
            MainFactory.loadPrograms([$routeParams.programId], function (program) {
                var favorite = {
                    program: program[0],
                    moment: moment
                };
                FavoritesFactory.removeFavorite(favorite);
            });
            $($event.target).removeClass('selected');
        }
    };

    $scope.loadFavorites = function () {
        $scope.allFavorites = FavoritesFactory.loadFavorites();
        angular.forEach($scope.allFavorites, function (favorite) {
            if (favorite.program.programId === $routeParams.programId) {
                $scope.favorites.push(favorite.moment);
            }
        });
    };
    $scope.loadFavorites();

});