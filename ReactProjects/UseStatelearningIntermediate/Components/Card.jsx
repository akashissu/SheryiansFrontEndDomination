import React from 'react'

function Card(){

    const data = [
        {name:"Paro",description:"Kuch Bhi Kuuch BhoiiidnjkaniuHIU ZCIUHRIUH"},
        {name:"Maand",description:"zJNL. kjsfhiuhc riwhbdIHiuwh"},
        {name:"Fitoor",description:"kjznljniunckmnziu"},
        {name:"KRishna",description:"zoihgmlvljkdsn mlksamoijfir"},
    ]

    const handleClickDownload = ()=>{alert("Chal Raha Hai")};


  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center'>
    {data.map((item,index)=>(
          <div className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
          <h3 className='font-semibold text-2xl'>{item.name}</h3>
          <p className='text-xs mt-2'>{item.description}</p>
          <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3 '>Download Now</button>
        </div>
    ))}
    </div>
  )
}

export default Card