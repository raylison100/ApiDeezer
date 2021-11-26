'use strict';
const Route = use('Route');

Route.group(() => {
    Route.any('search', 'DeezerController.searchSyncCache');
    Route.post('create/user/:id/playlists', 'DeezerController.createPlaylistSync');
    Route.delete('delete/user/:id/playlists', 'DeezerController.deletePlaylistSync');
    Route.any('*', 'DeezerController.gatewaySyncCache');
}).prefix('deezer');

Route.group(() => {
    Route.post('create-user', 'AuthController.create');
    Route.put('udpate-user/:id', 'AuthController.updateUser');
    Route.delete('delete-user/:id', 'AuthController.delete');

    Route.post('login', 'AuthController.authenticate');
    Route.get('logout', 'AuthController.logout');
}).prefix('autheticate');

Route.get('check/infra', 'HomeController.checkInfra');

Route.any('*', 'HomeController.unauthorized');
