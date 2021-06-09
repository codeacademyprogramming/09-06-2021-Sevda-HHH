import { PlayListRouter } from "./music_player/playlistRouter";
import { SongsRouter } from "./music_player/songRouter";
import { UsersRouter } from "./music_player/userRouter";

export const ROUTES = [
    {
        path: '/playlists',
        router: PlayListRouter
    },
    {
        path: '/songs',
        router: SongsRouter
    },
    {
        path: '/users',
        router: UsersRouter
    }

];