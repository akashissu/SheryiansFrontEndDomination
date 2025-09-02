import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    
    
const {name} = useParams();
const navigate = useNavigate();

const GoBackhandler = ()=>{
    // navigate("/user");
    navigate(-1);

}
  return (


    <div>
    <div className='m-auto mt-10'>
      <h1 className='text-7xl'>UserDetails</h1>

      <h1 className='text-3xl'>{name}</h1>

      <button onClick = {GoBackhandler}
       className='mt-5 text-white px-3 py-2 bg-red-300 '>
        Go Back
      </button>

      
    </div>
    </div>
  )
}

export default UserDetails
