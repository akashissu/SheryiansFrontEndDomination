import React from 'react'

const Form = ({handleFormSubmitData}) => {
  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-10'action="">
        <input className=" rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder='name'/>
        <input className=" rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder='email'/>
        <input className=" rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder='imageUrl'/>
        <input className=" rounded-md px-5 py-1 bg-blue-500 text-white font-semibold"type="submit" />
      </form>
    </div>
  )
}

export default Form


//! Form andling Me confusion hai....
