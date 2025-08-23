import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Card (){
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='relative w-60 h-32 bg-zinc-500 rounded-md overflow-hidden'>
        
        <img className= "w-full h-full object-cover"src="https://plus.unsplash.com/premium_photo-1745529078769-14f550bb6858?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span className='w-10 h-10 flex item-center justify-center rounded-full bg-[dadada7b] absolute buttom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <FaArrowRightLong/>
        </span>
        
      </div>


    </div>
  )
}

export default Card
