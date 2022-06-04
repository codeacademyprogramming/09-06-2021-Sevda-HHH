import axios from 'axios'
import { IPlaylist, ISong } from '../models';

class PlaylistService {
    private instance = axios;
    baseUrl = `http://localhost:8000`

    public getPlaylists(): Promise<IPlaylist[]> {
        return axios.get(`${this.baseUrl}/playlists`).then((res) => res.data)
    }

    public gtePlaylist(id: string): Promise<IPlaylist> {
        return axios.get(`${this.baseUrl}/playlists/${id}`).then((res) => res.data);
    }

    public addPlaylist(): Promise<IPlaylist> {
        return axios.post(`${this.baseUrl}/playlists`)
    }

    public addPlaylistSong(id: string, song: ISong): Promise<IPlaylist> {
        return axios.post(`${this.baseUrl}/playlists/${id}/songs `, song)
    }
}

export const playlistService = new PlaylistService();