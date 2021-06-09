import axios from 'axios'
import { IUser } from '../models';

class UserService {
    private instance = axios;
    baseUrl = `http://localhost:8000`

    public getUsers(): Promise<IUser[]> {
        return axios.get(`${this.baseUrl}/users`).then((res) => res.data)
    }

    public getUser(id: string): Promise<IUser> {
        return axios.get(`${this.baseUrl}/users/${id}`).then((res) => res.data);
    }

    public addUser(user: IUser): Promise<IUser> {
        return axios.post(`${this.baseUrl}/users`, user).then((res) => res.data);
    }
}

export const userService = new UserService();