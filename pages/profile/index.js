import React ,{useEffect, useState}from 'react'
import axios from 'axios'
function Profile() {

    const [loading, setLoading] =useState(true)
    const [data, setData] =useState(null)


    useEffect(() => {


    axios.get('http://localhost:4000/profile').then((res) =>{
        setLoading(false)
        setData(res.data)
    }).catch((err=>console.log(err)))
    
     
    }, [])
    if(loading) {
        return <p>loading.........</p>
    }
  return (
    <div>
        <h2>{data.name} ---{data.age}</h2>
    </div>
  )
}

export default Profile