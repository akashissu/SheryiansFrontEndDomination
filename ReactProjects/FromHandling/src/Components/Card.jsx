import React from 'react'

const Card = ({users}) => {
  return (
    <>
    {users.map((item,index)=>{
      return <div className='w-40 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-15 h-15 rounded-full bg-zinc-200 overflow-hidden'>
        <img className = "w-full h-full object-cover" src="" alt="" srcset="" />

      </div>
      <h1 className='mt-1 font-semibold text-xl'>Akash</h1>
      <h4 className='opacity-40 text-xs font-semibold'>akash@gmail.com</h4>
      <p className='mt-1 text-center text-xs font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sed.</p>
      <button className='px-3 py-1 bg-red-700 text-xs rounded-lg font-semibold text-white mt-4'>Remove It</button>
      </div>
    })}
    </>
      
  )
}

export default Card
