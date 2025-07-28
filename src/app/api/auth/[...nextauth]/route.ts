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
return{
   host: await readFile('/run/secrets/EMAIL_SERVER_HOST',{encoding:'utf-8'}),
  port: await readFile('/run/secrets/EMAIL_SERVER_PORT',{encoding:'utf-8'}),
  user:await readFile('/run/secrets/EMAIL_SERVER_USER',{encoding:'utf-8'}),
  pass:await readFile('/run/secrets/EMAIL_SERVER_PASSWORD',{encoding:'utf-8'}),
  from:await readFile('/run/secrets/EMAIL_FROM',{encoding:'utf-8'}) as unknown as string
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
      host: vars.host,
      port: vars.port ,
      auth: {
        user: vars.user,
        pass: vars.pass
      }
    },
    from: vars.from

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
