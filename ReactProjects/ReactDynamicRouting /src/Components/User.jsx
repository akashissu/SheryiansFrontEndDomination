import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <div className=' w-1/2 m-auto mt-10'>
      <h1 className='text-7xl'>User</h1>
      
      <div className='flex w-1/2 flex-col mt-5'>
        <Link className='p-3 bg-red-200 text-2xl rounded-md mb-3 hover:bg-red-700' to  = "/user/John">John</Link>
        <Link className='p-3 bg-red-200 text-2xl rounded-md mb-3 hover:bg-red-700'to = "/user/Ayush">Ayush</Link>
        <Link className='p-3 bg-red-200 text-2xl rounded-md mb-3 hover:bg-red-700' to = "/user/Akash">Akash</Link>
      </div>

      <hr />

      <Outlet/>
    </div>
    </div>
  )
}

export default User
