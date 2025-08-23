import React from 'react'
import Card from '../Components/Card'

function App(){

    const data = [
    {name:"Akash", profession:"Student1",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"NishiKant", profession:"Student2",image:"https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Vivek", profession:"Student3",image:"https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Vikash", profession:"Student4",image:"https://images.unsplash.com/photo-1631588310958-dec1630f8df5?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ]

  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
      {data.map((item,index)=>(
        <Card image={item.image} name={item.name} profession={item.profession} />
      ))}
    </div>
    </>
  )
}

export default App

