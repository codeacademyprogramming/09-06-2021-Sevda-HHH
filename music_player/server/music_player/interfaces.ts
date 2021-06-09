export interface ISong {
    id: string,
    name: string
    artists: string
    upload_date: string
    media_url: string
}

export interface IPlaylist {
    id: string,
    name: string,
    creation_date: string,
    userId: string,
    songsId: string[]
}

export interface IUser {
    id: string,
    name: string,
    surname: string,
    pass: string,
    email: string
}