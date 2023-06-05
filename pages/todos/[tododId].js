import React from 'react'
import axios from 'axios';
import Todo from '@/server/models/todos'
import dbConnect from "@/server/utils/dbConect"

import { getOneTodo } from '../api/todos/[todoId]';


function SingleTodoPage({todo}) {

  //console.log(todo)null
  return (
    <div>SingleTodoPage</div>
  )
}

 export default SingleTodoPage


 export async function getServerSideProps(context) {
  dbConnect()
  const {query} =context
  console.log(`params:${query}`)
   const todos = await Todo.find({})
    return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}

//  export async function getServerSideProps(context) {
//   const { query } = context;

//    console.log(`server side :${query}`)
//   // get one todo from DB !
//   const todo = await getOneTodo(query);
//   console.log(`todo:${todo}`)
//   return {
//     props: {
//       todo: JSON.parse(JSON.stringify(todo)),
//     },
//   };
// }

  

