import React from 'react'
import axios from 'axios';
import { query } from 'express';


function BlogsList({blogs,category}) {
  return (
    <div>
        <h1>blogs for.... </h1>
            {blogs.map((item)=>{
            return <h3 key={item.id}>category:{item.category} .....{item.title}</h3>
        })}   
    </div>
  )
}

export default BlogsList



export async function  getServerSideProps(context) {
    const {params} =context
    const {category} =params
    // Fetch data from external API
    const {data} = await axios.get(`http://localhost:4000/blogs?category=${category}`);
  
  
    // Pass data to the page via props
    return {
          props: { blogs:data, category }
         };
  }