import React, { useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'

const App = () => {

  const data = [
    { image:"https://plus.unsplash.com/premium_photo-1756147641535-6232626a4cb8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Aaaiyee",
      artist:"Akash",
      added:false
    },
    { image:"https://images.unsplash.com/photo-1756314355668-7d3056db8600?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Mai Hoo Jiyan",
      artist:"Vivek",
      added:false
    },

    { image:"https://images.unsplash.com/photo-1755605889798-7b33d0477768?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Mera Kanth hai",
      artist:"Vikash",
      added:false
    },

    { image:"https://images.unsplash.com/photo-1755467020939-4c3e196545bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"bahut Surila",
      artist:"NishiKant",
      added:false
    },
  ];


  const [songData,setData] = useState(data);

  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex === index) return {...item, added: !item.added};
        return item;
      })
    })
    

  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-300'>
        <Navbar/>
        <div className='px-20 flex gap-10 mt-32 flex-wrap'>
          {songData.map((obj,index)=>(
            <Card data={obj} handleClick={handleClick} index={index} key={index}/>
          ))}

        </div>
        
        
      </div>
    </>
  )
}

export default App
