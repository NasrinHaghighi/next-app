import React from 'react'

const array = [-2, 3, -1, 5, 4, -7, 2, 1, -3, 6];
const sum=array.reduce((ac, cu)=>{
let m=0
m=ac+cu
return m
}, 0)
  
console.log(sum)
function index() {
  return (
    <div>index</div>
  )
}

export default index