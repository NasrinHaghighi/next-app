import React from 'react'
import Link from 'next/link';
import {  PencilIcon  } from '@heroicons/react/24/outline';
import {CheckIcon} from '@heroicons/react/24/outline';
import {TrashIcon} from '@heroicons/react/24/outline';

function SingleTodo({todo, deleteTodo }) {
  //console.log(todo.id)//ok
  return (
    <div  
    className="flex  justify-between border border-gray-300 mb-4 p-3 md:p-4 rounded-xl w-full ">
    <span>{todo.title}</span>
    <div className="flex gap-x-3 items-center">
      <button className="" >
      <CheckIcon  className="w-6 h-6 stroke-green-400" /> 
      </button>
       <button onClick={()=>deleteTodo(todo.id)}>
       <TrashIcon  className="w-6 h-6 stroke-red-400" /> 
      </button> 
   
   
         <PencilIcon className="w-6 h-6 stroke-blue-400" /> 
     
     
    </div>
  </div>
);
  
}

export default SingleTodo


// {`/todos/${todo._id}`}