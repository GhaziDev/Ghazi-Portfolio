export const dynamic = "force-dynamic";
import mongoose from "mongoose";
const dotenv = await import ('dotenv')
dotenv.config({path:'../../../.env'})
import { readFile } from "fs/promises";


export const connect = async ()=>{
    console.log('this is prod environment')
    console.log(process.env!.PROD!)
   
    try{
        if((process.env!.PROD!)=='0'){
            console.log('here')
            return await mongoose.connect(process.env!.CONNECTION_STRING!)
        }
        else{
        const data = (await readFile('/run/secrets/CONNECTION_STRING',{encoding:'utf8'})).trim()
        console.log('connection string')
        console.log(data)
        console.log(`CONNECTION STRING IS : ${data}`)
        console.log('testing testing')
        return await mongoose.connect(data)
        
        }
    }
    catch(e){
        console.log('after error')
        console.log('this is prod environment')
    console.log(process.env!.PROD!)
        console.log(`this is error : ${e} `)
    }
    

}





