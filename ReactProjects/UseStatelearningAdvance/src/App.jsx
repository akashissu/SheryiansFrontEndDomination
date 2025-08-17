import React, { useState } from 'react'

function App(){

  const [val,setVal] = useState({name:"Akash", isBanned:false})

  return (
    <div className='p-5'>
      <h1>name: {val.name}</h1>
      <h1>banned: {val.isBanned.toString()}</h1>
      <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} className='px-3 py-1 bg-sky-400 rounded md text-zinc-200'>Chnage Me</button>
      
    </div>
  )
}

export default App
