import React from 'react'
import Link from 'next/link'
import axios from 'axios'

function ProductsList({products}) {

    console.log(products)
  return (

<>
    <h1>ProductsList</h1>
    <div>
   
 {products.map((item)=>{
    return <Link href={`/products/${item.id}`}>
     <h1>{item.title} .......{item.price}</h1>   
        </Link>
})} 
        
    </div>

    </>
  )
}

export default ProductsList


export const getStaticProps = async () => {
    const {data} =await axios.get('http://localhost:4000/products');
  
    return { props: 
      { products: data } 
    
    };
  };