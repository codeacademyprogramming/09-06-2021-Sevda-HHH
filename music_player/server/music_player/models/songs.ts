import mongoose from 'mongoose';
const { Schema } = mongoose;

const songsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artists: {
        type: String,
        required: true
    },
    upload_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    media_url: {
        type: String,
        required: true
    }
})

export default mongoose.model("Song", songsSchema)
