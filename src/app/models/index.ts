import { connect } from "../db/utils"

import { UserModel } from "./User"

const makeAQuery=  async()=>{
    await connect()

    const newUser = new UserModel({email:'ghazi-z3balawi@hotmail.com'})
    newUser.save()

    return newUser



}

const result = await makeAQuery()

console.log(result)
