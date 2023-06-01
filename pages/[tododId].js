import React from 'react'
import axios from 'axios';




function SingleTodoPage() {
  return (
    <div>SingleTodoPage</div>
  )
}

 export default SingleTodoPage

// export async function getStaticPaths() {
//   const {data} =await axios.get('/api/todos');

  
// const paths = data.map((todo)=>{
//   return {params:{todoId : todo.id.toString()}}
// })
// return {
//         paths,
//         fallback: true,
//       };
    
// }
// export const getStaticProps = async (context) => {

//     const {params} = context
//     const {data} = await axios.get(`api/todos/${params.todoId}`);
  
//     return { props: {
//       product: data 
//     }
      
    
//     };
//   };
