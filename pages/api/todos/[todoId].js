///import {todos} from '../../../data/todos'
import dbConnect from "@/server/utils/dbConect"
import Todo from '../../../server/models/todos'

dbConnect()

export default async function handler(req, res) {
    //res.status(200).json({todo:req.query.todoId  })
 const {method, query} =req
 
if(method === 'DELETE'){
    const todoId =query.todoId
    console.log(`delete: ${todoId}`)
  await Todo.findByIdAndDelete(todoId)
   const todos=await Todo.find()
     
  return  res.status(200).json({todos})



 }else if(method === 'GET'){
  const todoId =query.todoId
  console.log(`get: ${todoId}`)
  const todo = await getOneTodo( query );
  return res.status(200).json({ messag: "todo loaded", todo });
 }

}


export async function getOneTodo( query ) {
  const todo = await Todo.findById(query.todoId);
  return todo;
}




// else if (method === "GET") {
//   /*this console is not apeare in the termminal*/
//   console.log(`get:${query.todoId}`)
//    const todo = await getOneTodo( query );
// console.log(`todo:${todo}`)
//  return res.status(200).json({ messag: "todo loaded", todo });
//  }