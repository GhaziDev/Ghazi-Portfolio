export const dynamic = "force-dynamic";
import mongoose from "mongoose";
const dotenv = await import ('dotenv')
dotenv.config({path:'../../../.env'})

import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({ region: "ap-southeast-2" }); // Replace with your region


export const connect = async ()=>{
   
    try{
        if((process.env!.PROD!)=='0'){
            return await mongoose.connect(process.env!.CONNECTION_STRING!)
        }
        else{
        //const data = (await readFile('/run/secrets/CONNECTION_STRING',{encoding:'utf8'})).trim()
        const command =  new GetSecretValueCommand({SecretId:'secrets'})
        const res = await client.send(command)
        if(res.SecretString){
        const secret = JSON.parse(res.SecretString);
      // Access individual keys
        const CONNECTION_STRING = secret.CONNECTION_STRING;
        return await mongoose.connect(CONNECTION_STRING)
        }
        
        
        }
    }
    catch(e){
    console.log(`this is error : ${e} `)
    }
    

}





