import mongoose from 'mongoose'

const {Schema} = mongoose



const UserSchema = new Schema({
    email:String,
    emailVerified:Date

})

export const UserModel = mongoose.models.UserModel||mongoose.model('UserModel',UserSchema)


