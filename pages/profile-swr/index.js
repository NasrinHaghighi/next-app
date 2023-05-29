import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

const fetcher=async ()=>{
const {data} =await axios.get('http://localhost:4000/profile')
return data
}

function ProfileSWR() {
    const { data, error, isLoading } = useSWR('getuserdata', fetcher)

    if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>


  return (
    <div>


<h2>{data.name} ---{data.balance}</h2>
    </div>
  )
}

export default ProfileSWR