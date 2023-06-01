//import {todos} from '../../../data/todos'
import dbConnect from "@/server/utils/dbConect"
import Todo from '../../../server/models/todos'


dbConnect()
export default async function handler(req, res) {
    const {method, body} =req

    if(method === 'POST'){
        console.log(body)
         await Todo.create({title:body.formData.title, description:body.formData.description})
         const todos=await Todo.find({})
   
          return res.status(201).json(todos)



    }else if(req.method === 'GET'){
        const todos=await Todo.find({})
       return res.status(200).json({todos  })
    }
  }