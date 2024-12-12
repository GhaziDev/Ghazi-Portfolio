import { connect } from "../db/utils"

import { UserModel } from "./User"

const makeAQuery=  async()=>{
    await connect()

    const newUser = new UserModel({email:'newportfolioacc@gmail.com'})
    newUser.save()







    return 



}

const result = await makeAQuery()



console.log(result)
