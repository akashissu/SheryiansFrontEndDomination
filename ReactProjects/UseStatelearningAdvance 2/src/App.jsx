//!Advance 1 Code

// import React, { useState } from 'react'

// function App(){

//   const [val,setVal] = useState({name:"Akash", isBanned:false})

//   return (
//     <div className='p-5'>
//       <h1>name: {val.name}</h1>
//       <h1>banned: {val.isBanned.toString()}</h1>
//       <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} className={`px-3 py-1 ${ val.isBanned ? "bg-sky-400" : "bg-red-400"} rounded md text-zinc-200`}>Chnage Me</button>

//     </div>
//   )
// }

// export default App

//! Advance 2nd Code

// import React, { useState } from 'react'

// function App(){

//   const [val,setVal] = useState({name:"Akash", age:23})

//   return (
//     <div>
//       <button onClick={()=>console.log(val)}>Click Me</button>
//     </div>
//   )
// }

// export default App

//! Advance 3nd Code Array Function..

// import React, { useState } from 'react'

// function App(){

//   const [val,setVal] = useState([1,2,3,4,5,6])

//   return (
//     <div className='p-5'>
//       {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setVal(()=>{
//         return val.filter((item,index)=> index!=val.length-1)
//       })} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>Click Me</button>

//     </div>
//   )
// }

// export default App

//! Advance 4th Code Array Function..

// import React, { useState } from 'react'

// function App(){

//   const [val,setVal] = useState([1,2,3,4,5,6])

//   return(
//     <div className='p-5'>
//       {val.map(item => <h1>{item}</h1>)}
//       <button onClick = {()=>setVal(()=>(val.filter((item,index)=>index!=2)))} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>Click Me</button>
//     </div>
//   )
// }

// export default App

//! Advance 4th Code Addition in Array Function..

// import React, { useState } from 'react'

// function App(){

//   const [val,setVal] = useState([1,2,3,4,5,6])

//   return(
//     <div className='p-5'>
//       {val.map(item=> <h1>{item}</h1>)}
//       <button onClick={()=>setVal([...val,7])} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>Click Me</button>
//     </div>
//   )
// }

// export default App

//! Advance 5th Code Addition in Array Function..

import React, { useState } from "react";

function App() {
  const [val, setVal] = useState([
    { name: "Akash", age: 24 },
    { name: "Nishikant", age: 35 },
    { name: "Vivek", age: 26 },
  ]);

  return (
    <div className="p-5">
      {val.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
      <button
        onClick={()=>setVal(()=>val.map(item=>item.name==="Vivek" ? ({name:"Vivek",age:28}):item))}
        className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
      >
       Click Me
      </button>
    </div>
  );
}

export default App;
