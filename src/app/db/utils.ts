import mongoose from "mongoose";
const dotenv = await import ('dotenv')
dotenv.config({path:'../../../.env.local'})


export const connect = async ()=>{
   
    return await mongoose.connect(process.env!.CONNECTION_STRING!)
}





