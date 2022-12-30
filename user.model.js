import mongoose, {Schema} from 'mongoose'

const unserSchema = new Schema({
    username: String,
    email: String,
    password: String
})

export const userModel = mongoose.model('user', unserSchema)