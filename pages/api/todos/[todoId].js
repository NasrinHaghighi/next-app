///import {todos} from '../../../data/todos'
import dbConnect from "@/server/utils/dbConect"
import Todo from '../../../server/models/todos'
import { query } from "express"
dbConnect()

export default async function handler(req, res) {
    //res.status(200).json({todo:req.query.todoId  })
 const {method, query} =req
if(method === 'DELETE'){
    const todoId =query.todoId
  await Todo.findByIdAndDelete(todoId)
   const todos=await Todo.find()
    
  return  res.status(200).json({todos})
}
 }