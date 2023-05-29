import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


function SingleProducts({product}) {
    const router=useRouter()


    if(router.isFallback){
        return <h5>loading............</h5>
    }
  return (

        <h1>product: {product.title} .....{product.price} </h1>
      
  )
}

export default SingleProducts


export async function getStaticPaths() {
    const {data} =await axios.get('http://localhost:4000/products');
  
    
  const paths = data.map((product)=>{
    return {params:{productId : product.id.toString()}}
  })
  return {
          paths,
          fallback: true,
        };
      
  }
  export const getStaticProps = async (context) => {
  
      const {params} = context
      const {data} = await axios.get(`http://localhost:4000/products/${params.productId}`);
    
      return { props: {
        product: data 
      }
        
      
      };
    };