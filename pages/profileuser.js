import React from 'react'
import Layout from '@/components/Layout'
import { signIn, useSession } from 'next-auth/react'



function ProFileUser() {
    const {data:session, status}=useSession({
        required:true,
        onUnauthenticated(){
signIn()
        }
    })
console.log(session)
    // if(status === loading) {
    //     return <p>loading</p>
    // }
  return (
    <Layout>
    <div>{session.user.name  } welcome ....ProFileUser</div>
    </Layout>
  )
}

export default ProFileUser