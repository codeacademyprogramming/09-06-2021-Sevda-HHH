export interface ISong {
    _id: string,

    name: string
    artists: string
    upload_date: string
    media_url: string
}

export interface IPlaylist {
    // _id: string,
    name: string,
    creation_date: string,
    userId: string,
    songsId: string[]
}

export interface IUser {
    // _id: string,
    // /
    name: string,
    surname: string,
    pass: string,
    email: string
}