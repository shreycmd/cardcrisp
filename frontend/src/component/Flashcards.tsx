import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
interface problem{
    question:string
    answer:string
    isflipped:boolean
    handleflip:()=>void
}

const Flashcards = ({question,answer,isflipped,handleflip}:problem ) => {
   
  return (
    <div  className='' >
        
        <ReactCardFlip flipDirection='vertical' isFlipped={isflipped} >
            <div className=' card flex items-center justify-center flex-col ' onClick={handleflip}>
<p className='my-3 text-center font-bold'>QUESTION.</p>           <p className='text-center font-semibold'>{question}</p>
            </div>
            <div className='card cb flex items-center justify-center flex-col' onClick={handleflip}>
            <p className='my-3 text-center font-bold'>ANSWER.</p> <p className='text-center  font-semibold'>{answer}</p>
            </div>
        </ReactCardFlip>
    </div>
  )
}

export default Flashcards