import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PlasyList } from './models';
import { IPlaylist } from './interfaces';
import { Songs } from './data';

export const PlayListRouter = express.Router();

PlayListRouter.use(cors());

// get list 

PlayListRouter.get('/', async (req: Request, resp: Response) => {
    try {
        const playlists = await PlasyList.find();
        resp.status(200).json(playlists)
    } catch (err) {
        resp.status(500).json({ message: err.message })
    }
})

// create
PlayListRouter.post('/', async (req: Request, resp: Response) => {
    const playlistPayload: IPlaylist = {
        ...req.body
    }
    const playlist = new PlasyList(playlistPayload)

    try {
        const newPlaylist = playlist.save();
        resp.status(204).json(newPlaylist)
    }
    catch (err) {
        resp.status(500).json({ message: err.message })
    }
}
)


// get

PlayListRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const playlist = await PlasyList.findById(id)
        if (!playlist) {
            res.status(404).json({ message: 'Not found' });
        } else {
            res.json(playlist);
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// delete 

PlayListRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const playlist = await PlasyList.findById(id)
        if (!playlist) {
            res.status(404).json({ message: 'Not found' });
        } else {
            await playlist.remove()
            res.status(200).json({ message: 'Deleted' });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// update 

PlayListRouter.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        let playlist = await PlasyList.findById(id);
        if (!playlist) {
            res.status(404).json({ message: 'Not found' });
        } else {
            await PlasyList.findByIdAndUpdate(id, req.body, {
                useFindAndModify: true
            })
            playlist = await PlasyList.findById(id);
            res.json(playlist);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// apply 

// PlayListRouter.post('/:id/songs', async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const songIdPayload: string = req.body.songsId

//     const songExists = await Songs.filter((song) => song.id === songIdPayload)

//     if (songExists) {
//         try {

//             const playlist = PlasyList.findById(id);
//             const updatedPlaylist = { ...playlist }
//             updatedPlaylist.songsId.push({
//                 songIdPayload
//             })
//             return updatedPlaylist
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }

//     } else {
//         res.status(500).json({ message: "error" });
//     }
// });

