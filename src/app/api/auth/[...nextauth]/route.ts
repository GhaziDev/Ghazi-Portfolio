export const dynamic = "force-dynamic";
import NextAuth from "next-auth";
import { connect } from "@/app/db/utils";
import Email from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { UserModel } from "@/app/models/User";
import { User } from "next-auth";
import { MongoClient } from "mongodb";
import { readFile } from "fs/promises";
//import path from "path";

import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({ region: "ap-southeast-2" });

const getVars = async ()=>{
  if((process!.env!.PROD!)=='0'){
    return {
      host: process.env!.EMAIL_SERVER_HOST!,
      port: process.env!.EMAIL_SERVER_PORT!,
      user: process.env!.EMAIL_SERVER_USER!,
      pass: process.env!.EMAIL_SERVER_PASSWORD!,
      from:process.env!.EMAIL_FROM!

    }
  }

  else{
    const command = new GetSecretValueCommand({ SecretId:"secrets" })
    const response = await client.send(command);
     if (response.SecretString) {
      const secret = JSON.parse(response.SecretString);

      // Access individual keys
      const host = secret.EMAIL_SERVER_HOST;
      const port = secret.EMAIL_SERVER_PORT;
      const user = secret.EMAIL_SERVER_USER;
      const pass = secret.EMAIL_SERVER_PASSWORD
      const from = secret.EMAIL_FROM

      return{
   host: host,
  port: port,
  user: user,
  pass: pass,
  from:from
}
    }
    


  }

  
}


const executeAuthOptions = async ()=>{
  const vars = await getVars()



const connection = await connect()
const client = connection!.connection.getClient()



// Define your NextAuth options
const authOptions = {
  adapter:MongoDBAdapter(client as unknown as MongoClient),

  // Configure one or more authentication providers
  providers: [

  Email({
    server: {
      host: vars?.host,
      port: vars?.port ,
      auth: {
        user: vars?.user,
        pass: vars?.pass
      }
    },
    from: vars?.from

  })
  ],
  callbacks:{
    async signIn({user}:{user:User}){
      const email = await UserModel.findOne({email:user?.email})

      if(email){
        return true
      }
      return false

    } 
  }
  
  ,
  // ...add more providers here
};
return authOptions
}



// Create the NextAuth handler
const handler = NextAuth(await executeAuthOptions())

// Export the handler for both GET and POST requests
export {handler as GET, handler as POST}
