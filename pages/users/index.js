import User from '@/components/User';
import axios from 'axios';
import React from 'react'

function UserList({userlist}) {
    const {results} = userlist
    console.log(results)
  return (
 <>
 <div>
   {results.map((user) =>{
    return <User key={user.id} user={user}/>
   })}
 </div>
 </>
  
  )
}

export default UserList

export const getStaticProps = async () => {
  const {data} =await axios.get('https://rickandmortyapi.com/api/character?page=2');

  return { props: 
    { userlist: data } 
  
  };
};