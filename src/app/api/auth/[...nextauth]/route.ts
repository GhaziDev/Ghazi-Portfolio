import NextAuth from "next-auth";
import { connect } from "@/app/db/utils";
import Email from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { UserModel } from "@/app/models/User";
import { User } from "next-auth";
import { MongoClient } from "mongodb";

const connection = await connect()
const client = connection.connection.getClient()



// Define your NextAuth options
const authOptions = {
  adapter:MongoDBAdapter(client as unknown as MongoClient),

  // Configure one or more authentication providers
  providers: [

  Email({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      }
    },
    from: process.env.EMAIL_FROM

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

// Create the NextAuth handler
const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export {handler as GET, handler as POST}
