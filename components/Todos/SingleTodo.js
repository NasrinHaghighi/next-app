import React from 'react'
import Link from 'next/link';
import { CheckIcon, PencilAltIcon, BeakerIcon  } from '@heroicons/react/24/outline';


function SingleTodo() {
  return (
    <div  
    className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl"
  >
 <Link href='/'>     
        <span >react</span>
      
    </Link>
    <div className="flex gap-x-3 items-center">
      <button className="" >
      <BeakerIcon  className="w-6 h-6 stroke-red-400" /> 
      </button>
      <button >
       <BeakerIcon  className="w-6 h-6 stroke-red-400" /> 
      </button>
      <Link href='/'>
      <BeakerIcon  className="w-6 h-6 stroke-red-400" /> 
          {/* <PencilAltIcon className="w-6 h-6 stroke-blue-400" /> */}
     
      </Link>
    </div>
  </div>
);
  
}

export default SingleTodo


// {`/todos/${todo._id}`}