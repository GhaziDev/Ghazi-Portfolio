import mongoose from 'mongoose'

const {Schema} = mongoose

const BlogSchema = new Schema({
    slug:String,
    title:String,
    image:String,
    description:String,
    tags:Array<string>,
    date:Date,


    


})

export const BlogModel = mongoose.models?.BlogModel||mongoose.model('BlogModel',BlogSchema)


