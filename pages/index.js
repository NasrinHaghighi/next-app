import React from 'react'
import Link from 'next/link'
import SingleTodo from '@/components/Todos/SingleTodo'
function Home() {
  return (
    <>
    <div className='container mx-auto px-4 '>
    <h1  className=' flex justify-center text-2xl ring-offset-2 ring-4'>Todo list
    </h1>
    <div className='container p-2 xl:max-w-screen-xl mx-auto'>

      <section className='flex items-center justify-center'>

       <SingleTodo />



</section>
<section className='flex items-center justify-center'>

<SingleTodo />



</section>
    </div>
  

    <Link href='/users'  className=' flex justify-center'> user List ?</Link>
    <hr/>
    <Link href='/episodes'  className=' flex justify-center'> episodes List ?</Link>



    </div>
   </>
  )
}

export default Home