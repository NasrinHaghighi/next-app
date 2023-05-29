import React from 'react'
import Link from 'next/link'
function Home() {
  return (
    <>
    <h1  >Home...............</h1>
    <Link href='/users'> user List ?</Link>
    <hr/>
    <Link href='/episodes'> episodes List ?</Link>
   </>
  )
}

export default Home