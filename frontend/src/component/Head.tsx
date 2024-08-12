import React, { useState } from 'react'

const Head = () => {
  const [val,setval]=useState(" ");
  const handle=(e:Event)=>{
    setval(e.target.value)
    
  }
  return (
    <div className='text-center  text-gray-700 flex justify-center items-center flex-col '>
        <h1 className='text-7xl'>Welcome to CardCrisp</h1>
        <p className='text-2xl'> Learn with fun</p>
        
    </div>
  )
}

export default Head