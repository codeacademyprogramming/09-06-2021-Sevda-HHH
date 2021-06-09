import { IPlaylist, ISong, IUser } from "./interfaces";

export const Users: IUser[] = [
    {
        id: '1',
        name: 'sevda',
        surname: 'huseynova ',
        pass: 'test123',
        email: 'sevdamh@code.edu.az'
    },
    {
        id: '2  ',
        name: 'sevda',
        surname: 'huseynova ',
        pass: 'test123',
        email: 'sevdamh@code.edu.az'
    }
];

export const Songs: ISong[] = [
    {
        id: "1",
        name: 'Experience',
        artists: "Ludovico Einaudi ",
        upload_date: '07/06/2021',
        media_url: 'youtube.com '
    },
    {
        id: "2",
        name: 'Experience',
        artists: "Ludovico Einaudi ",
        upload_date: '07/06/2021',
        media_url: 'youtube.com '
    },
]

export const PlayLists: IPlaylist[] = [
    {
        id: "1",
        name: 'Sevdanin playlisti',
        creation_date: '07/06/2021',
        userId: '1',
        songsId: ['1', '2']
    }
]


