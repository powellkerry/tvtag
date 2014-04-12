var app = angular.module('tvtag');

app.factory('FavoritesFactory', function ($http) {
    return {
        loadFavorites: function () {
            return JSON.parse(window.localStorage.getItem('favorites'));
        },
        addFavorite: function (favorite) {
            var favorites = this.loadFavorites();

            if (!favorites) {
                favorites = [];
            }
            favorites.push(favorite);

            window.localStorage.setItem('favorites', JSON.stringify(favorites));
        },
        removeFavorite: function (favorite) {
            var currentFavorites = this.loadFavorites(),
                newFavorites = [];

            angular.forEach(currentFavorites, function (fav) {
                if (fav.moment._id !== favorite.moment._id) {
                    newFavorites.push(fav);
                }
            });
            window.localStorage.setItem('favorites', JSON.stringify(newFavorites));
        },
        isFavorite: function (favorite) {
            var favorites = this.loadFavorites(),
                isFavorite = false;

            if (favorites) {
                angular.forEach(favorites, function(fav) {
                    if (favorite._id === fav.moment._id) {
                        isFavorite = true;
                    }
                });
            }
            return isFavorite;
        }
    };
});