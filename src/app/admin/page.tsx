'use client'
import { useSession, signIn, signOut } from "next-auth/react"

import CreateBlog from "./createblog"



export default function Admin():JSX.Element {
  const { data:session } = useSession()
  if (session) {
    return (

      <div>
        Signed in as {session.user?.email} <br />
        <button type='button' onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
        <CreateBlog/>
      </div>
    )
  }
  return (
    <div>
      Not signed in <br />
      <button  type='button' onClick={() => signIn("email")}>Sign in</button>
    </div>
  )
}