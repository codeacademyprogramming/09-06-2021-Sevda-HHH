import mongoose from 'mongoose';
const { Schema } = mongoose;

const playlistSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    songsId:
        [
            {
                type: String,
                required: true
            }
        ]
})

export default mongoose.model("PlasyList", playlistSchema)