import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connect } from "@/app/db/utils";
import Email from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { UserModel } from "@/app/models/User";

const connection = await connect()
const client = connection.connection.getClient()





// Define your NextAuth options
const authOptions = {
  adapter:MongoDBAdapter(client),

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET_ID!,
    
    },
  )
    ,


  Email({
  })
  ],
  callbacks:{
    async signIn({user}){
      const email = await UserModel.findOne({email:user})
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
export const GET = handler;
export const POST = handler;