import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { Song } from './models';
import { ISong } from './interfaces';

export const SongsRouter = express.Router();

SongsRouter.use(cors());

// get list 

SongsRouter.get('/', async (req: Request, resp: Response) => {
    try {
        const songs = await Song.find();
        resp.status(200).json(songs)
    } catch (err) {
        resp.status(500).json({ message: err.message })
    }
})



// create
SongsRouter.post('/', async (req: Request, resp: Response) => {
    const songPayload: ISong = {
        ...req.body
    }
    const song = new Song(songPayload)

    try {
        const newSong = await song.save();
        resp.status(202).json(newSong)
    }
    catch (err) {
        resp.status(500).json({ message: err.message })
    }
}
)


// get

SongsRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const song = await Song.findById(id)
        if (!song) {
            res.status(404).json({ message: 'Not found' });
        } else {
            res.json(song);
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// delete 

SongsRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const song = await Song.findById(id)
        if (!song) {
            res.status(404).json({ message: 'Not found' });
        } else {
            await song.remove()
            res.json({ message: 'Deleted' });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// update 

SongsRouter.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        let song = await Song.findById(id);
        if (!song) {
            res.status(404).json({ message: 'Not found' });
        } else {
            await Song.findByIdAndUpdate(id, req.body, {
                useFindAndModify: true
            })
            song = await Song.findById(id);
            res.json(song);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});