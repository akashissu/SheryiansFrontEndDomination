// import React from 'react'

// function Card ({text,color}){
//   return (
//     <button className={`px-3 py-1 ${color} text-zinc-100 text-xs rounded m-2`}>{text}</button>
//   )
// }

// export default Card



import React from 'react'


function Card ({image,name,profession}){
   

  return (
    <div className='w-50 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-40 bg-sky-200'>
        <img className="w-full h-full object cover "src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h1 className='text-xl font-semibold'>{name}</h1>
        <h3 className='text-sm'>{profession}</h3>
        <button onClick ={()=>alert("Addiding As A friend")} className=' mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md '>Add Friend</button>
      </div>


    </div>
  )
}

export default Card
