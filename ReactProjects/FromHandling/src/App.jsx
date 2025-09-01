
//! Form Handling By UseRef Method

// import React, { useRef } from 'react'

// const App = () => {
  
//   const name = useRef(null);
//   const age = useRef(null);

//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(name.current.value,age.current.value);
//   }
//   return (

//     <div className='p-4'>
//       <form action="" onSubmit = {handleSubmit}>
//         <input ref= {name} className='border-2'type="text" placeholder='name' />
//         <input ref = {age} placeholder="age" type='text'/>
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App


//! By Using Controlled Method

// import React, { useState } from 'react'

// const App = () => {

//   const [val,setVal] = useState({name:""});

//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(val);
//   }


//   return (
//     <div>
      

//       <form action="" onSubmit={handleSubmit}>
//         <input onChange={(event)=>setVal({...val,name: event.target.value})} type="text" placeholder='name' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App



//! By Using React hook Form


// import React from 'react'
// import { useForm } from 'react-hook-form'

// const App = () => {

//   const {register,handleSubmit} = useForm();

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit(data => console.log(data))}>
//       <input {...register("name")} type="name" placeholder='name'/>
//       <input {...register("email")} type="email" placeholder='email'/>
//       <input type="submit"/>
//       </form>

//     </div>
//   )
// }

// export default App


//!

import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'

const App = () => {

  const[users,setUsers] = useState([]);
  
  const handleFormSubmitData = (data)=>{
    setUsers([...users,data])
  }


  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center '>
      <div className='container mx-auto'>
        <Cards users = {users}/>
        <Form handleFormSubmitData = {handleFormSubmitData}/>
      </div>
    </div>
  )
}

export default App

