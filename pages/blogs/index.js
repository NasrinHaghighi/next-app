import React from 'react'
import axios from 'axios';


function BlogsList({blogs}) {

  return (
    <div>
        {blogs.map((item)=>{
            return <h3 key={item.id}>{item.title} ----{item.category}</h3>
        })} 
    </div>
  )
}

export default BlogsList

export async function  getServerSideProps() {
    // Fetch data from external API
    const {data} = await axios.get(`http://localhost:4000/blogs`);
  
   
    // Pass data to the page via props
    return { props: { blogs:data } };
  }