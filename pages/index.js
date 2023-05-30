import React ,{useEffect, useState }from 'react'
import Link from 'next/link'
import SingleTodo from '@/components/Todos/SingleTodo'
import useSWR from 'swr'
import axios from 'axios'



const fetcher=async ()=>{


  const {data} =await axios.get('/api/todos')
  return data


  }

function Home() {
 const [data, setData] =useState(null)
 const [loading, setLoading] =useState(true)

useEffect(() => {
 const {data} =  axios.get('/api/todos')
 .then((res)=>{
  setData(res.data)
  setLoading(false)
 }


 
 )

}, [])

const deleteTodo=(id)=>{
  console.log(id)
}



  if (loading) return <div>loading...</div>


  return (
    <>
    <div className='container mx-auto px-4 '>
    <h1  className=' flex justify-center text-2xl ring-offset-2 ring-4'>Todo list
    </h1>
    <div className='container p-2 xl:max-w-screen-xl mx-auto'>

      <section className='flex flex-col items-center justify-center'>

      {data.todos.map((todo)=>{
        return <SingleTodo todo={todo} deleteTodo={deleteTodo}/>
      })}



</section>
<hr/>
    </div>
  

    <Link href='/users'  className=' flex justify-center'> user List ?</Link>
    <hr/>
    <Link href='/episodes'  className=' flex justify-center'> episodes List ?</Link>



    </div>
   </>
  )
}

export default Home