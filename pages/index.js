import React ,{useEffect, useState }from 'react'
import Link from 'next/link'
import SingleTodo from '@/components/Todos/SingleTodo'
import useSWR from 'swr'
import axios from 'axios'
import AddNewTodo from '@/components/Todos/AddNewTodo'




function Home() {
 const [data, setData] =useState(null)
 const [loading, setLoading] =useState(true)

useEffect(() => {
 axios.get('/api/todos')
 .then((res)=>{
  setData(res.data.todos)
  setLoading(false)
 }


 
 )

}, [])

const deleteTodo=(id)=>{
  axios.delete(`/api/todos/${id}`).then((res)=>setData(res.data.todos))
}



const addTodo=(e,formData)=>{
  e.preventDefault()
  console.log(formData)
axios.post(`/api/todos/`, {formData}).then((res)=>setData(res.data))
}
 if (loading) return <div>loading...</div>
  return (
    <>
    <div className='container mx-auto px-4 '>
    <h1  className=' flex justify-center text-2xl ring-offset-2 ring-4'>Todo list
    </h1>
      <div className='container p-2 xl:max-w-screen-xl mx-auto'>
      <section className='flex flex-col items-center justify-center'>
 
      <AddNewTodo addTodo={addTodo}/>

      {data.map((todo)=>{
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




// DB_PASSWORD=JS8e9J9ibUMFhfjh
// DB_USER=nasrinnext

// MONGO_URI=mongodb+srv://DB_USER:DB_PASSWORD@expressnode.phhwydj.mongodb.net/todoDB?retryWrites=true&w=majority