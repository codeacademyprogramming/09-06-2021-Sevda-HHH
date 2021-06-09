import axios from 'axios'
import { ISong } from '../models';

class SongService {
    private instance = axios;
    baseUrl = `http://localhost:800 0`

    public getSongs(): Promise<ISong[]> {
        return axios.get(`${this.baseUrl}/songs`).then((res) => res.data)
    }

    public getSong(id: string): Promise<ISong> {
        return axios.get(`${this.baseUrl}/songs/${id}`).then((res) => res.data);
    }

    public addSong(song: ISong): Promise<ISong> {
        return axios.post(`${this.baseUrl}/songs`, song).then((res) => res.data);
    }
}

export const songService = new SongService();