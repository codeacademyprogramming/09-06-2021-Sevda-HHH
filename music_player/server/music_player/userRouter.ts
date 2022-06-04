import express, { Request, Response } from 'express';
import cors from 'cors';
import { User } from './models';
import { IUser } from './interfaces';

export const UsersRouter = express.Router();

UsersRouter.use(cors());

// get list 

UsersRouter.get('/', async (req: Request, resp: Response) => {
    try {
        const users = await User.find();
        resp.status(200).json(users)
    } catch (err) {
        resp.status(500).json({ message: err.message })
    }
})

// create
UsersRouter.post('/', async (req: Request, resp: Response) => {
    const userPayload: IUser = {
        ...req.body
    }
    const user = new User(userPayload)

    try {
        const newUser = await user.save();
        resp.status(202).json(newUser)
    }
    catch (err) {
        resp.status(500).json({ message: err.message })
    }
}
)


// get

UsersRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).json({ message: 'Not found' });
        } else {
            res.json(user);
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// delete 

UsersRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).json({ message: 'Not found' });
        } else {
            await user.remove()
            res.json({ message: 'Deleted' });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// update 

UsersRouter.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        let user = await User.findById(id);
        if (!user) {
            res.status(404).json({ message: 'Not found' });
        } else {
            await User.findByIdAndUpdate(id, req.body, {
                useFindAndModify: true
            })
            user = await User.findById(id);
            res.json(user);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});