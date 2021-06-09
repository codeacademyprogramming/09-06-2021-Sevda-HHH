import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: false
    },
    pass: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

export default mongoose.model("c", usersSchema)