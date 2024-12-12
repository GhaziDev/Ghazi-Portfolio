'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { SessionProvider } from "next-auth/react"
import CreateBlog from "./createblog"

type Props = {
  children:React.ReactNode,
}


export const NextSessionProvider = ({children}:Props)=>{
  return <SessionProvider>{children}</SessionProvider>
}

export default function Admin() {
  const { data:session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user!.email} <br />
        <button type='button' onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
        <CreateBlog/>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button  type='button' onClick={() => signIn("email")}>Sign in</button>
    </>
  )
}